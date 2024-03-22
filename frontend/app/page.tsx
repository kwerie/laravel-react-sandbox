'use client'

import {useEffect, useRef, useState} from "react";
import {get, post, put} from '@/app/(services)/(http)/http.service';
import TodoList from "@/app/(components)/(todo-list)/todo-list.component";
import {TodoItem as TodoItemInterface} from "@/app/(interfaces)/todo-item.interface";

interface JSendSuccessResponse {
    data: any[];
}

export default function Home() {
    const [todoItemsData, setTodoItemsData] = useState<null | TodoItemInterface[]>(null);
    const todoItemsFetched = useRef(false);

    function fetchTodoItems(): void {
        get('http://localhost/api/todo-items')
            .then(response => response.json())
            .then((json: JSendSuccessResponse) => {
                return setTodoItemsData(json.data);
            });
    }

    function addTodoItem(data: any): void {
        post(
            'http://localhost/api/todo-items',
            {
                title: data.get('title'),
            },
        )
            .then(response => response.json())
            .then((json: JSendSuccessResponse) => {
                return setTodoItemsData(json.data);
            });
    }

    useEffect(() => {
        if (!todoItemsFetched.current) {
            todoItemsFetched.current = true;
            fetchTodoItems()
        }
    }, [todoItemsData]);

    function completeTodoItem(id: number) {
        console.log('id', id);
        return;
        put('http://localhost/api/todo-items', {
            method: 'PUT',
            body: JSON.stringify({id: id}),
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then((json: JSendSuccessResponse) => {
                return setTodoItemsData(json.data);
            })
            .catch(error => console.error(error));
    }

    return (
        <main className={'flex flex-col h-dvh w-dvw items-center justify-center'}>
            <div>Todo Items</div>

            <TodoList todoItems={todoItemsData} completeTodoItem={completeTodoItem}></TodoList>
            <form action={addTodoItem}>
                <input type="text" required name="title"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <button type="submit">Add todo Item</button>
            </form>
        </main>
    );
}
