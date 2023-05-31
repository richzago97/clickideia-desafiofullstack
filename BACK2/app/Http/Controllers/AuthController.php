<?php

namespace App\Http\Controllers;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Contracts\JWTSubject;

class DummyUser implements JWTSubject
{
    private $login;
    private $password;

    public function __construct()
    {
        $this->login = 'seu-login';
        $this->password = 'sua-senha';
    }

    public function getJWTIdentifier()
    {
        return $this->login;
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function getLogin()
    {
        return $this->login;
    }

    public function getPassword()
    {
        return $this->password;
    }
}

class AuthController extends Controller
{
    public function login()
    {
        $user = new DummyUser();
        $token = JWTAuth::fromUser($user);

        return response()->json(['token' => $token]);
    }
}
