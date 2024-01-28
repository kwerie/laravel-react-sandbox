<?php

namespace App\Http\Controllers;

use App\Response\JSendSuccessResponse;
use App\Service\TodoItemsService;
use App\Transformer\TodoItemTransformer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TodoItemsController extends Controller
{
    public function __construct(
        private readonly TodoItemsService $todoItemsService,
        private readonly TodoItemTransformer $transformer,
    ) {
    }

    public function index(): JsonResponse
    {
        return new JSendSuccessResponse($this->transformer->transformCollection($this->todoItemsService->getAll()));
    }

    public function update(Request $request): JsonResponse
    {
        $id = $request->input('id');
        $this->todoItemsService->markAsComplete($id);

        return new JSendSuccessResponse($this->transformer->transformCollection($this->todoItemsService->getAll()));
    }

    public function create(Request $request): JsonResponse
    {
        $id = $request->input('title');
        $this->todoItemsService->create($id);

        return new JSendSuccessResponse($this->transformer->transformCollection($this->todoItemsService->getAll()));
    }
}
