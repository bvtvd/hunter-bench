<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RegisterTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
//    public function testExample()
//    {
//        $this->assertTrue(true);
//    }

    public function testsRegistersSuccessfully()
    {
        $payload = [
            'name' => 'John',
            'email' => 'john@toptal.com',
            'password' => '123qwe',
            'password_confirmation' => '123qwe'
        ];

        $this->json('post', '/api/register', $payload)
            ->assertStatus(201)
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'name',
                    'email',
                    'created_at',
                    'updated_at',
                    'api_token'
                ]
            ]);
    }

    public function testsRequiresPasswordEmailAndName()
    {
        $this->json('post', '/api/register')
            ->assertStatus(422)
            ->assertJson([
                'name' => ['The name field is required'],
                'email' => ['The email field is required'],
                'password' => ['The password field is required'],
            ]);
    }

    public function testsRequirePasswordConfirmation()
    {
        $payload = [
            'name' => 'John',
            'email' => 'john@toptal.com',
            'password' => '123qwe'
        ];

        $this->json('post', '/api/register', $payload)
            ->assertStatus(422)
            ->assertJson([
                'password' => ['The password confirmation does not match']
            ]);
    }
}
