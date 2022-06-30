import React from 'react';

const TodoList = ({ todos, refetch }) => {
    return (
        <div class="flex justify-center">
            <ul class="bg-white rounded-lg border border-gray-200 w-1/2 text-gray-900">
                <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg font-bold text-center">Todo list</li>
                {
                    todos.map(todo =>
                        <li class="px-6 py-2 border-b border-gray-200 w-full">{todo.title}</li>
                    )
                }
            </ul>
        </div>
    );
};

export default TodoList;