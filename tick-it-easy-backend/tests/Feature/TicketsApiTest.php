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
        $response = $this->json(
            'POST',
            '/api/tickets',
            [
                'price' => 20000,
                'routeID' => 5,
                'onDiscount' => true
            ]
        );
        $this->assertDatabaseHas('tickets',[
            'price' => 20000,
            'routeID' => 5,
            'onDiscount' => true
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
        $response = $this->json(
            'POST',
            '/api/tickets',
            [
                'price' => 20000,
                'routeID' => 5,
                'onDiscount' => true
            ]
        );
        $this->assertDatabaseHas('tickets',[
            'price' => 20000,
            'routeID' => 5,
            'onDiscount' => true
        ]);
        $ticketFromDatabase = Ticket::where('price',20000)->where('routeID',5)->where('onDiscount',true)->first()->toArray();
        
        $this->delete( '/api/tickets/'.$ticketFromDatabase['id']);
        $this->assertDatabaseMissing('tickets',$ticketFromDatabase);
        $response->assertStatus(200);
    }
}
