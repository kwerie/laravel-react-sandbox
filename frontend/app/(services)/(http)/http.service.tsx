export interface HttpParamInterface {
    [key: string]: string;
}

export async function get(url: string, params?: HttpParamInterface, headers?: HeadersInit): Promise<Response> {
    if (params) {
        Object.entries(params).map((param, index) => {
            if (index === 0) {
                url += `?${param[0]}=${param[1]}`;
            } else {
                url += `&${param[0]}=${param[1]}`;
            }
        });
    }

    try {
        const response = await fetch(
            url,
            {
                headers: headers,
                method: 'GET',
            },
        );

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        return response;
    } catch (err: Error) {
        console.error(err);
    }
}

export async function post(url: string, body: object, headers?: HeadersInit): Promise<Response> {
    if (!headers) {
        headers = {
            'Content-Type': 'application/json'
        };
    } else {
        Object.assign(headers, {'Content-Type': 'application/json'})
    }

    try {
        const response = await fetch(
            url,
            {
                headers: headers,
                method: 'POST',
                body: JSON.stringify(body),
            },
        );

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        return response;
    } catch (err: Error) {
        console.error(err);
    }
}

export async function put(url: string, body: object, headers?: HeadersInit): Promise<Response> {
    if (!headers) {
        headers = {
            'Content-Type': 'application/json'
        };
    } else {
        Object.assign(headers, {'Content-Type': 'application/json'})
    }

    try {
        const response = await fetch(
            url,
            {
                headers: headers,
                method: 'PUT',
                body: JSON.stringify(body),
            },
        );

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        return response;
    } catch (err: Error) {
        console.error(err);
    }
}

export async function patch() {
}

// }