export default function TodoItem({todoItemData}) {
    return (
        <>
            <span>{todoItemData.title}</span>
            <button>Complete Todo</button>
        </>
    );
}