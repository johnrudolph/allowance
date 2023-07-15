<?php

use Inertia\Inertia;
use App\Models\Entry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index', [
        'foo' => 'bar',
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/today', function () {
    return Inertia::render('Today', [
        'entries' => Entry::all(),
    ]);
});

Route::get('/entries', function () {
    return Inertia::render('Entries', [
        'entries' => Entry::all(),
    ]);
});

Route::get('/entries/{entry}', function (Entry $entry) {
    return Inertia::render('Entry', [
        'entry' => $entry,
    ]);
});

Route::post('/create', function (Request $request) {
    dd($request->all());

    $entry = Entry::updateOrCreate([
        'user_id' => $request->user_id,
        'day' => $request->day,
    ], [
        'entry' => $request->entry,
    ]);

    $entry->save();
});

Route::post('/edit', function (Request $request) {
    dd($request->all());
});