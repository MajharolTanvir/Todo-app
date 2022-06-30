import React from 'react';
import Loading from '../../shared/Loading';
import { useQuery } from 'react-query'
import { AiFillDelete } from "react-icons/ai";
import { toast } from 'react-toastify';

const CompletedTask = () => {
    const { data: todos, isLoading, refetch } = useQuery('todos', () => fetch('http://localhost:5000/todos').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = id => {
        fetch(`http://localhost:5000/todo/${id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Your data deleted successful")
                    refetch()
                }
            })
    }
    return (
        <section className="flex justify-center my-10">
            <ul className="bg-white rounded-lg border border-gray-200 md:w-1/2 text-gray-900">
                <li className="px-6 py-2 border-b font-bold border-gray-200 w-full rounded-t-lg text-center">Todo list</li>
                {
                    todos.map(todo => todo.role === 'completed' &&
                        <div key={todo._id} className="form-check flex justify-center items-center mx-4">
                            <label name="text" className="px-6 form-check-label py-2 border-b border-gray-200 w-full" htmlFor="flexCheckDefault">{todo.title}</label>
                            <button onClick={() => handleDelete(todo._id)}><AiFillDelete /></button>
                        </div>
                    )
                }
            </ul>
        </section>
    );
};

export default CompletedTask;