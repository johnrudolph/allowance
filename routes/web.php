<?php

use App\Models\User;
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

Route::get('/users/{user}', function (User $user) {
    return Inertia::render('Index', [
        'user' => $user,
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/', function () {
    return Inertia::render('Home', [
        'user' => User::first(),
    ]);
});

Route::get('/today', function () {
    return Inertia::render('Today', [
        'entries' => Entry::all(),
        'user' => User::find(1),
    ]);
});

Route::post('/create', function (Request $request) {

    Entry::post(User::first(), $request->date_formatted, $request->entry_in_dollars);
});

Route::post('/edit_user', function (Request $request) {
    $user = User::find($request->user_id);

    $user->updateInfo($request->allowance_in_dollars * 100, $request->description);
});