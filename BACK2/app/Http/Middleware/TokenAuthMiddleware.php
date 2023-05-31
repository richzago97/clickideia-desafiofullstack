<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class TokenAuthMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        try {
            $token = JWTAuth::parseToken();
            if (!$token->check()) {
                return response()->json(['message' => 'Token inválido'], 401);
            }
        } catch (\Throwable $e) {
            return response()->json(['message' => 'Token inválido'], 401);
        }

        return $next($request);
    }
}
