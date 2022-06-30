import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../shared/Loading';


const UseTodo = () => {

    const { data: todos, isLoading, refetch } = useQuery('todos', () => fetch('http://localhost:5000/todos').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(todos);
    return { todos, refetch };
};

export default UseTodo;