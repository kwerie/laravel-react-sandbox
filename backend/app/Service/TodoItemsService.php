<?php
declare(strict_types=1);

namespace App\Service;

use App\Repository\TodoItemRepository;
use Database\Factories\TodoItemFactory;
use Illuminate\Database\Eloquent\Collection;

class TodoItemsService
{
    public function __construct(
        private readonly TodoItemRepository $todoItemRepository,
        private readonly TodoItemFactory $todoItemFactory,
    ) {
    }

    public function getAll(): Collection
    {
        return $this->todoItemRepository->all();
    }

    public function markAsComplete(int $id): void
    {

    }
}
