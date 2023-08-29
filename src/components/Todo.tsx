
interface todoListProps {
    items: { id: string, title: string }[],
    onDelete: (id: string) => void
}

export default function Todo(props: todoListProps) {
    return (
        <ul>
            {
                props.items.map(todo => <li key={todo.id} className="flex justify-between items-center mx-auto w-80 drop-shadow-lg p-3 bg-zinc-100 my-5">{todo.title} <button className="bg-rose-600 text-stone-200 rounded-md px-2 py-1 my-2" onClick={props.onDelete.bind(null, todo.id)}>Delete</button></li>)
            }
        </ul>
    )
}

