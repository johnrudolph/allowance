<?php

namespace App\Models;

use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Entry extends Model
{
    use HasFactory;

    protected $guarded = [];

    public static function post(User $user, $date, $amount_in_dollars)
    {
        $date_converted_into_day = Carbon::parse($date)->format('M d Y');

        $entry = static::firstOrCreate([
            'user_id' => $user->id,
            'date' => $date_converted_into_day,
        ]);

        $entry->entry_in_cents = $amount_in_dollars * 100;

        $entry->save();
    }
}
