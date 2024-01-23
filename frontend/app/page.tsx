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

    useEffect(() => {
        if (!todoItemsFetched.current) {
            todoItemsFetched.current = true;
            fetchTodoItems()
        }
    }, [todoItemsData]);

    function completeTodoItem(id: number) {
        console.log(id);
        fetchTodoItems();
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
        </main>
    );
}
