<?php
declare(strict_types=1);

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TodoItemFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => $this->faker->title(),
            'completed_at' => $this->faker->date(),
        ];
    }
}
