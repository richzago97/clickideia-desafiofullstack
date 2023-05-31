<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;


class CardController extends Controller
{
    public function index()
    {
        $cards = Card::all();
        return response()->json($cards);
    }

    public function store(Request $request)
    {
        try {
            $this->validate($request, [
                'titulo' => 'required',
                'conteudo' => 'required',
                'lista' => 'required',
            ]);
        } catch (ValidationException $e) {
            $errors = $e->errors();
            $missingField = array_key_first($errors);
        
            return response()->json(['message' => 'Chave faltando: ' . $missingField], 400);
        }
        
        $card = Card::create($request->all());
        return response()->json($card, 201);
        
        
        
    }
    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'titulo' => 'sometimes|required',
                'conteudo' => 'sometimes|required',
                'lista' => 'sometimes|required',
            ]);
    
            $card = Card::findOrFail($id);
            $card->update($request->all());
            return response()->json($card);
        } catch (ValidationException $e) {
            return response()->json(['message' => 'Requisição inválida'], 400);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Card não encontrado'], 404);
        }
    }

    public function destroy($id)
    {
        try {
            $card = Card::findOrFail($id);
            $card->delete();
    
            $cards = Card::all();
            return response()->json($cards);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Card não encontrado'], 404);
        }
    }
}
