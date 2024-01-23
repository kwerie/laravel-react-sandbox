<?php
declare(strict_types=1);

namespace App\Repository;

use App\Models\TodoItem;

class TodoItemRepository extends AbstractRepository
{
    public function __construct(TodoItem $model)
    {
        parent::__construct($model);
    }
}
