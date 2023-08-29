import React, { useRef } from 'react'

interface formProps {
    onAdd: (title: string) => void
}

export default function NewTodo(props: formProps) {
    const titleRef = useRef<HTMLInputElement>(null)
    function submitHandler(e: React.FormEvent) {
        e.preventDefault()
        const title = titleRef.current!.value
        title && props.onAdd(title)
        titleRef.current!.value = ''
    }
    return (
        <div className='mx-auto w-80 drop-shadow-lg p-3 bg-zinc-100 my-5'>
            <form action="" onSubmit={submitHandler} className='flex flex-col' >
                <div className='flex flex-col'>
                    <label htmlFor="Todo">Title</label>
                    <input className='border-2' type="text" id='Todo' ref={titleRef} autoFocus />
                </div>
                <button className='bg-rose-600 text-stone-200 w-40 rounded-md p-1 my-2 mx-auto'>Create</button>
            </form>
        </div>
    )
}
