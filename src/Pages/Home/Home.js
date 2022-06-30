import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../../shared/Loading';

const Home = () => {

    const { data: todos, isLoading } = useQuery('todos', () => fetch('http://localhost:5000/todos').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className="flex justify-center my-10">
            <div className="flex justify-center">
                <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                    <li className="px-6 py-2 border-b font-bold border-gray-200 w-full rounded-t-lg text-center">Todo list</li>
                    {
                        todos.map(todo =>
                            <div key={todo._id} className="form-check flex justify-center items-center mx-4">
                                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                                <li className="px-6 form-check-label py-2 border-b border-gray-200 w-full" htmlFor="flexCheckDefault">{todo.title}</li>
                            </div>
                        )
                    }
                </ul>
            </div>
        </section>
    );
};

export default Home;