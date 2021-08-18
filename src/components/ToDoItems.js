import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';


export default function ToDoItems({toDoList, completeToDoItem, removeToDoItem, updateToDoItem}) {

    const[editToDo, setEditToDo] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateToDoItem(editToDo.id, value);
        setEditToDo({
            id: null,
            value: ''
        });
    }

    if (editToDo.id) {
        return <ToDoForm edit={editToDo} onSubmit={submitUpdate}/>
    }


    return toDoList.map((todoItem, index) => (
        <div 
            className={todoItem.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div 
                key={todoItem.id} 
                onClick={()=> completeToDoItem(todoItem.id)}
            >
            {todoItem.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    className='delete-icon'
                    onClick={ () => removeToDoItem(todoItem.id)}
                />
                <TiEdit
                    className='edit-icon'
                    onClick={ () => setEditToDo({id: todoItem.id, value: todoItem.text})}
                />
            </div>
        </div>
    ))
}
