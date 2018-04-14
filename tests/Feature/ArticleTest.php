<?php

namespace Tests\Feature;

use App\Article;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ArticleTest extends TestCase
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

    public function testsArticleAreCreatedCorrectly()
    {
        $user = factory(User::class)->create([
            'name' => 'John',
            'email' => 'john@toptal.com',
            'password' => '123qwe',
        ]);
        $token = $user->generateToken();
        $headers = ['Authorization' => "Bearer $token"];

        $payload = [
            'title' => 'Lorem',
            'body' => 'Ipsum'
        ];

        $this->json('POST', '/api/articles', $payload, $headers)
            ->assertStatus(201)
            ->assertJson(['title' => 'Lorem', 'body' => 'Ipsum']);
    }

    public function testsArticlesAreUpdatedCorrectly()
    {
        $user = factory(User::class)->create([
            'name' => 'John',
            'email' => 'john@toptal.com',
            'password' => '123qwe',
        ]);
        $token = $user->generateToken();
        $headers = ['Authorization' => "Bearer $token"];
        $article = factory(Article::class)->create([
            'title' => 'First Article',
            'body' => 'First Body',
        ]);

        $payload = [
            'title' => 'Lorem',
            'body' => 'Ipsum',
        ];

        $response = $this->json('PUT', '/api/articles/'. $article->id, $payload, $headers)
            ->assertStatus(200)
            ->assertJson([
                'id' => $article->id,
                'title' => 'Lorem',
                'body' => 'Ipsum'
            ]);
    }

    public function testsArticlesAreDeletedCorrectly()
    {
        $user = factory(User::class)->create([
            'name' => 'John',
            'email' => 'john@toptal.com',
            'password' => '123qwe',
        ]);
        $token = $user->generateToken();
        $headers = ['Authorization' => "Bearer $token"];
        $article = factory(Article::class)->create([
            'title' => 'First Article',
            'body' => 'First Body',
        ]);

        $this->json('DELETE', '/api/articles/'. $article->id, [], $headers)
            ->assertStatus(204);
    }

    public function testArticlesAreListedCorrectly()
    {
//        factory(Article::class)->truncate();
        factory(Article::class)->create([
            'title' => 'First Article',
            'body' => 'First Body',
        ]);

        factory(Article::class)->create([
            'title' => 'Second Article',
            'body' => 'Second Body',
        ]);

        $user = factory(User::class)->create();
        $token = $user->generateToken();
        $headers = ['Authorization' => "Bearer $token"];

        $response = $this->json('get', '/api/articles', [], $headers)
            ->assertStatus(200)
//            ->assertJson([
//                [ 'title' => 'First Article', 'body' => 'First Body' ],
//                [ 'title' => 'Second Article', 'body' => 'Second Body' ]
//            ])
            ->assertJsonStructure([
                '*' => ['id', 'body', 'title', 'created_at', 'updated_at'],
            ]);
    }
}
