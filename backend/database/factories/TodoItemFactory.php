<?php
declare(strict_types=1);

namespace Database\Factories;

use App\Models\TodoItem;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class TodoItemFactory extends Factory
{
    protected $model = TodoItem::class;
    public function definition(): array
    {
        return [
            'title' => $this->faker->title(),
            'completed_at' => $this->faker->date(),
        ];
    }

    public function markAsComplete(int $id): TodoItem
    {
        $todoItem = TodoItem::find($id);
        $todoItem->setCompletedAt(new Carbon());
        $todoItem->save();

        return $todoItem;
    }
}
