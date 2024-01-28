'use client'

import {useEffect, useRef, useState} from "react";

interface JSendSuccessResponse {
    data: any[];
}

interface TodoItem {
    id: number;
    title: string;
    completedAt: Date|null;
}

export default function Home() {
    const [todoItemsData, setTodoItemsData] = useState<null|TodoItem[]>(null);
    const todoItemsFetched = useRef(false);

    function fetchTodoItems(): void {
        fetch('http://localhost/api/todo-items')
            .then(response => response.json())
            .then((json: JSendSuccessResponse) => {
                return setTodoItemsData(json.data);
            })
            .catch(error => console.error(error));
    }

    function addTodoItem(data: any): void {
        fetch('http://localhost/api/todo-items', {
            method: 'POST',
            body: JSON.stringify({title: data.get('title')}),
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then((json: JSendSuccessResponse) => {
                return setTodoItemsData(json.data);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        if (!todoItemsFetched.current) {
            todoItemsFetched.current = true;
            fetchTodoItems()
        }
    }, [todoItemsData]);

    function completeTodoItem(id: number) {
        fetch('http://localhost/api/todo-items', {
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
            <ul className={'todo_items'}>
                    {
                        todoItemsData ? todoItemsData?.map((todoItem) => {
                            return <li className={`item ${todoItem.completedAt ? 'line-through' : ''}`} key={todoItem.id}>
                                <span>{todoItem.title}</span>
                                {
                                    todoItem.completedAt ? '' :
                                        <button onClick={() => completeTodoItem(todoItem.id)}>Mark as finished</button>
                                }
                            </li>
                        }) : 'Loading todoItems'
                    }
            </ul>

            {todoItemsData?.length === 0  ? 'No todo items found' : ''}
            <form action={addTodoItem}>
                <input type="text" required name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <button type="submit">Add todo Item</button>
            </form>
        </main>
    );
}
