<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasTimestamps;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string $title
 * @property Carbon|null $completed_at,
 */
class TodoItem extends Model
{
    use HasFactory;
    use HasTimestamps;

    protected $table = 'todo_items';

    /** @var string */
    protected $fillable = [
        'title',
    ];

    protected array $dates = [
        'completed_at',
    ];

    public function getId(): int
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;
        return $this;
    }

    public function getCompletedAt(): Carbon|string|null
    {
        return $this->completed_at;
    }

    public function setCompletedAt(?Carbon $completedAt): self
    {
        $this->completed_at = $completedAt;
        return $this;
    }
}
