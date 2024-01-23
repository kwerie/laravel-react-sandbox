<?php
declare(strict_types=1);

namespace App\Transformer;

use App\Models\TodoItem;
use Illuminate\Database\Eloquent\Collection;

class TodoItemTransformer
{
    public function transform(TodoItem $todoItem): array
    {
        return [
            'id' => $todoItem->getId(),
            'title' => $todoItem->getTitle(),
            'completedAt' => $todoItem->getCompletedAt()/*?->format('d-m-Y')*/,
        ];
    }

    /** @return TodoItem[] */
    public function transformCollection(Collection $collection): array
    {
        return $collection->map(
            function(TodoItem $todoItem) {
                return $this->transform($todoItem);
            }
        )->toArray();
    }
}
