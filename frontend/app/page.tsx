'use client'

import {useEffect, useState} from "react";

interface JSendSuccessResponse {
    data: object;
}

export default function Home() {
    const [ping, setPingData] = useState<null|number>(null);
    const [todoItemsData, setTodoItemsData] = useState<null|any>(null);

    useEffect(() => {
        fetch('http://localhost/api/ping')
            .then(response => response.json())
            .then((json: {ack: number}) => setPingData(json.ack))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        fetch('http://localhost/api/todo-items')
            .then(response => response.json())
            .then((json: JSendSuccessResponse) => {
                setTodoItemsData(json.data);
                console.log('json', json.data)
                console.log('todoItemsData', todoItemsData)
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <main className={'flex h-dvh w-dvw items-center justify-center'}>
            <div>
                <p>
                    Backend ping: {ping ? ping.toString() : 'Loading ping response...'}
                </p>
            </div>
        </main>
    );
}
