import {TodoItem as TodoItemInterface} from "@/app/(interfaces)/todo-item.interface";
import TodoItem from "@/app/(components)/(todo-item)/todo-item.component";
import React from "react";

type TodoListProps = {
    todoItems: TodoItemInterface[]|null;
    completeTodoItem/*: (id: number) => void*/;
}

class TodoList extends React.Component<TodoListProps, any> {
    public render() {
        return (
            <>
                {this.props.todoItems ? this.props.todoItems.map((todoItem: TodoItemInterface) => {
                    return <TodoItem key={todoItem.id}
                                     todoItemData={todoItem}
                                     onClick={() => this.props.completeTodoItem(todoItem.id)}
                    ></TodoItem>
                }) : 'Loading items'}
            </>
        )
    }
}

export default TodoList;

// export default function TodoList({todoItems}) {
//
//     return (
//         <>
//             {todoItems ? todoItems.map((todoItem: TodoItemInterface) => {
//                 return <TodoItem key={todoItem.id}
//                                  todoItemData={todoItem}
//                                  onClick={() => {
//                                      this.props.completeTodoItem(todoItem.id);
//                                  }}
//                 ></TodoItem>
//             }) : 'Loading items'}
//         </>
//     );
// }