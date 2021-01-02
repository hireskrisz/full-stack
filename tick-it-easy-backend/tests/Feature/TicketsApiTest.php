<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Ticket;

class TicketsApiTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testReadAllTicket()
    {
        $response = $this->get('/api/tickets');
        $ticketsCount = count(Ticket::all());
        $response->assertJsonCount($ticketsCount);
        $response->assertStatus(200);
    }

    public function testReadOneTicket()
    {
        $response = $this->get('/api/tickets/1');
        $ticketFromDatabase = Ticket::where('id',1)->first()->toArray();
        $response->assertJson($ticketFromDatabase);
        $response->assertStatus(200);
    }

    public function testCreateTicket(){
        $loginResponse = $this->json(
            'POST',
            '/api/login',
            [
                'email' => 'peter@erdosi.com',
                'password'=> '12345678',
                'password_confirmation' => '12345678'
            ]
        );
        echo dd($loginResponse);
        $response = $this->json(
            'POST',
            '/api/tickets',
            [
                'price' => 20000,
                'routeID' => 5,
                'onDiscount' => true
            ],
            ['HTTP_AUTHORIZATION' => "Bearer {$loginResponse['token']}",
            'CONTENT_TYPE' => 'application/ld+json',
            'HTTP_ACCEPT' => 'application/ld+json']
        );
        $logout = $this->json(
            'POST',
            '/api/logout',
            [
                'HTTP_AUTHORIZATION' =>"Bearer {$loginResponse['token']}",
                'CONTENT_TYPE' => 'application/ld+json',
                'HTTP_ACCEPT' => 'application/ld+json' 
            ]
        );
        $this->assertDatabaseHas('tickets',[
            'price' => 20000,
            'routeID' => 5,
            'onDiscount' => boolval(true)
        ]);
        $response->assertStatus(200);
    }

    public function testEditTicket(){
        $this->json(
            'PUT',
            '/api/tickets/1',
            [
                'price' => 20000,
                'routeID' => 5,
                'onDiscount' => true
            ]
        );
        $response = $this->get('/api/tickets/1');
        $ticketFromDatabase = Ticket::where('id',1)->first()->toArray();
        $response->assertJson($ticketFromDatabase);
        $response->assertStatus(200);

    }

    public function testDestroyTicket(){
        $loginResponse = $this->json(
            'POST',
            '/api/login',
            [
                'email' => 'peter@erdosi.com',
                'password'=> '12345678',
                'password_confirmation' => '12345678'
            ]
        );
        $response = $this->json(
            'POST',
            '/api/tickets',
            [
                'price' => 20000,
                'routeID' => 5,
                'onDiscount' => true
            ],
            [
                'HTTP_AUTHORIZATION' =>"Bearer {$loginResponse['token']}",
                'CONTENT_TYPE' => 'application/ld+json',
                'HTTP_ACCEPT' => 'application/ld+json' 
            ]
        );
        $this->assertDatabaseHas('tickets',[
            'price' => 20000,
            'routeID' => 5,
            'onDiscount' => boolval(true)
        ]);
        $ticketFromDatabase = Ticket::where('price',20000)->where('routeID',5)->where('onDiscount',true)->first()->toArray();
        
        $this->delete( '/api/tickets/'.$ticketFromDatabase['id'],[],[
            'HTTP_AUTHORIZATION' =>"Bearer {$loginResponse['token']}",
            'CONTENT_TYPE' => 'application/ld+json',
            'HTTP_ACCEPT' => 'application/ld+json' 
        ]);
        $logout = $this->json(
            'POST',
            '/api/logout',
            [
                'HTTP_AUTHORIZATION' =>"Bearer {$loginResponse['token']}",
                'CONTENT_TYPE' => 'application/ld+json',
                'HTTP_ACCEPT' => 'application/ld+json' 
            ]
        );
        $this->assertDatabaseMissing('tickets',$ticketFromDatabase);
        $response->assertStatus(200);
    }
}
