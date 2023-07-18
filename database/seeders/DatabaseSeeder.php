<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Entry;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'John Rudolph Drexler',
            'email' => 'johnrudolphdrexler@gmail.com',
        ]);
    }
}
