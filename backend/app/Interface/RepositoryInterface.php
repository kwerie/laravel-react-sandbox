<?php

namespace App\Interface;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

interface RepositoryInterface {
    public function find(int $id): ?Model;

    public function all(): Collection;
}
