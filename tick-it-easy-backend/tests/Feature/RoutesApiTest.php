<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Route;

class RoutesApiTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testReadAllRoute()
    {
        $response = $this->get('/api/routes');
        $routesCount = count(Route::all());
        $response->assertJsonCount($routesCount);
        $response->assertStatus(200);
    }

    public function testReadOneRoute()
    {
        $response = $this->get('/api/routes/1');
        $routeFromDatabase = Route::where('id',1)->first()->toArray();
        $response->assertJson($routeFromDatabase);
        $response->assertStatus(200);
    }

    public function testCreateRoute(){

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
            '/api/routes',
            [
                'from' => 'Moszkva',
                'to' => 'Tokió',
                'startTime' => '2021-10-20 10:00:00',
                'endTime' => '2021-10-20 13:45:00',
                'vehicleID' => 10
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
        $this->assertDatabaseHas('routes',[
            'from' => 'Moszkva',
            'to' => 'Tokió',
            'activePassengers' => 0,
            'startTime' => '2021-10-20 12:00:00',
            'endTime' => '2021-10-20 15:45:00',
            'vehicleID' => 10
        ]);
        $response->assertStatus(200);
    }

    public function testEditRoute(){
        $this->json(
            'PUT',
            '/api/routes/1',
            [
                'price' => 20000,
                'routeID' => 5,
                'onDiscount' => true
            ]
        );
        $response = $this->get('/api/routes/1');
        $routeFromDatabase = Route::where('id',1)->first()->toArray();
        $response->assertJson($routeFromDatabase);
        $response->assertStatus(200);

    }

    public function testDestroyRoute(){
        $loginResponse = $this->json(
            'POST',
            '/api/login',
            [
                'email' => 'peter@erdosi.com',
                'password'=> '12345678',
                'password_confirmation' => '12345678'
            ]
        );
        echo("response: ".$loginResponse);
        $response = $this->json(
            'POST',
            '/api/routes',
            [
                'from' => 'Moszkva',
                'to' => 'Tokió',
                'startTime' => '2021-10-20 10:00:00',
                'endTime' => '2021-10-20 13:45:00',
                'vehicleID' => 10
            ],
            ['HTTP_AUTHORIZATION' => "Bearer {$loginResponse['token']}",
            'CONTENT_TYPE' => 'application/ld+json',
            'HTTP_ACCEPT' => 'application/ld+json']
        );
        
        $this->assertDatabaseHas('routes',[
            'from' => 'Moszkva',
            'to' => 'Tokió',
            'startTime' => '2021-10-20 12:00:00',
            'endTime' => '2021-10-20 15:45:00',
            'vehicleID' => 10
        ]);
        $routeFromDatabase = Route::select('id')->where('from','Moszkva')->where('to','Tokió')->where('startTime','2021-10-20 12:00:00')
                                    ->where('endTime','2021-10-20 15:45:00')->where('vehicleID',10)->first()->toArray();
        
        $this->delete( '/api/routes/'.$routeFromDatabase['id'],[],
        ['HTTP_AUTHORIZATION' => "Bearer {$loginResponse['token']}",
        'CONTENT_TYPE' => 'application/ld+json',
        'HTTP_ACCEPT' => 'application/ld+json']);
        $logout = $this->json(
            'POST',
            '/api/logout',
            [
                'HTTP_AUTHORIZATION' =>"Bearer {$loginResponse['token']}",
                'CONTENT_TYPE' => 'application/ld+json',
                'HTTP_ACCEPT' => 'application/ld+json' 
            ]
        );
        $this->assertDatabaseMissing('routes',$routeFromDatabase);
        $response->assertStatus(200);
    }
}
