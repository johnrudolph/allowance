<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use App\Models\Entry;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ExampleTest extends TestCase
{
    use DatabaseMigrations;

    public function test_update_or_create_entry(): void
    {
        $user = User::factory()->create();

        $this->assertEquals(Entry::count(), 0);
        
        Entry::post($user, now(), 12.48);

        $this->assertEquals(1248, Entry::first()->entry_in_cents);

        Entry::post($user, now(), 79.17);

        $this->assertEquals(Entry::count(), 1);

        $this->assertEquals(7917, Entry::first()->entry_in_cents);
    }
}
