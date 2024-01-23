<?php

namespace App\Http\Controllers;

use App\Response\JSendSuccessResponse;
use Illuminate\Http\JsonResponse;

class TodoItemsController extends Controller
{
    public function index(): JsonResponse
    {
        return new JSendSuccessResponse(['bla']);
    }
}
