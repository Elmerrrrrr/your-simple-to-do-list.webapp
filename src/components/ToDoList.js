import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItems from './ToDoItems';


export default function ToDoList(){

    const toDolistStored = JSON.parse(localStorage.getItem('ToDoItems'));
 
    const [toDoList, setToDoList] = useState(toDolistStored ? toDolistStored: []);

    const addToDo = todo =>{
        if (!todo.text || /^\s$/.test(todo.text)) {
            return
        }
        const newToDoList = [todo, ...toDoList];
        localStorage.setItem('ToDoItems', JSON.stringify(newToDoList));
        setToDoList(newToDoList);
    }

    const removeToDoItem = id =>{
         const removedItemList = [...toDoList].filter(todoItem => todoItem.id !== id);
         localStorage.setItem('ToDoItems', JSON.stringify(removedItemList));
         setToDoList(removedItemList);
    }

    const updateToDoItem = (id, newValue) =>{
        if (!newValue.text || /^\s$/.test(newValue.text)) {
            return
        }
        const updatedList = toDoList.map(item => (item.id===id ? newValue : item));
        console.log(updatedList);
        localStorage.setItem('ToDoItems', JSON.stringify(updatedList));
        setToDoList(updatedList);
    }

    const completeToDoItem = id =>{
        let updatedTodos = toDoList.map(todo =>{
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        localStorage.setItem('ToDoItems', JSON.stringify(updatedTodos));
        setToDoList(updatedTodos);
    }

    return(
        <>
            <h5>- Your To Do List -</h5>
            <ToDoForm onSubmit={addToDo} />
            <ToDoItems
                toDoList={toDoList}
                completeToDoItem={completeToDoItem}
                removeToDoItem={removeToDoItem}
                updateToDoItem={updateToDoItem}
            />
        </>
    )
 
}