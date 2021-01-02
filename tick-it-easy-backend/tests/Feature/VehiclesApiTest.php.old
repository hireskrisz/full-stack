<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Vehicle;

class VehiclesApiTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testReadAllVehicle()
    {
        $response = $this->get('/api/vehicles');
        $vehiclesCount = count(Vehicle::all());
        $response->assertJsonCount($vehiclesCount);
        $response->assertStatus(200);
    }

    public function testReadOneVehicle()
    {
        $response = $this->get('/api/vehicles/1');
        $vehicleFromDatabase = Vehicle::where('id',1)->first()->toArray();
        $response->assertJson($vehicleFromDatabase);
        $response->assertStatus(200);
    }

    public function testCreateVehicle(){
        $response = $this->json(
            'POST',
            '/api/vehicles',
            [
                'type' => 'busz',
                'license' => '2021-05-03',
                'capacity' => 130
            ]
        );
        $this->assertDatabaseHas('vehicles',[
            'type' => 'busz',
            'license' => '2021-05-03',
            'capacity' => 130
        ]);
        $response->assertStatus(200);
    }

    public function testEditVehicle(){
        $this->json(
            'PUT',
            '/api/vehicles/1',
            [
                'type' => 'busz',
                'license' => '2021-05-03',
                'capacity' => 130
            ]
        );
        $response = $this->get('/api/vehicles/1');
        $vehicleFromDatabase = Vehicle::where('id',1)->first()->toArray();
        $response->assertJson($vehicleFromDatabase);
        $response->assertStatus(200);

    }

    public function testDestroyVehicle(){
        $response = $this->json(
            'POST',
            '/api/vehicles',
            [
                'type' => 'villamos',
                'license' => '2100-05-03',
                'capacity' => 130
            ]
        );
        $this->assertDatabaseHas('vehicles',[
            'type' => 'villamos',
            'license' => '2100-05-03',
            'capacity' => 130
        ]);
        $vehicleFromDatabase = Vehicle::where('type','villamos')->where('license','2100-05-03')->where('capacity',130)->first()->toArray();
        
        $this->delete( '/api/vehicles/'.$vehicleFromDatabase['id']);
        $this->assertDatabaseMissing('vehicles',$vehicleFromDatabase);
        $response->assertStatus(200);
    }
}
