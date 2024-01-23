<?php
declare(strict_types=1);

namespace App\Response;

use Illuminate\Http\JsonResponse;

class JSendSuccessResponse extends JsonResponse
{
    public function __construct(array|object $data, int $status = 200)
    {
        return parent::__construct(['data' => $data], $status);
    }
}
