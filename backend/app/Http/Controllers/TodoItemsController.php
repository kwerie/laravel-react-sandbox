<?php

namespace App\Http\Controllers;

use App\Response\JSendSuccessResponse;
use App\Service\TodoItemsService;
use App\Transformer\TodoItemTransformer;
use Illuminate\Http\JsonResponse;

class TodoItemsController extends Controller
{
    public function __construct(
        private readonly TodoItemsService $todoItemsService,
        private readonly TodoItemTransformer $transformer,
    )
    {
    }

    public function index(): JsonResponse
    {
        return new JSendSuccessResponse($this->transformer->transformCollection($this->todoItemsService->getAll()));
    }
}
