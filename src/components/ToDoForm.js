import React, {useState, useEffect, useRef} from 'react';


export default function ToDoForm(todoProp){

const [input, setInput] = useState(todoProp.edit ? todoProp.edit.value : '');

const inputRef = useRef(null);

useEffect(() => {
    inputRef.current.focus();
})

const handleChange = e =>{
    setInput(e.target.value);
};

const handleSubmit = e =>{
    e.preventDefault();
    todoProp.onSubmit({
        id: Math.floor(Math.random() * 90000) ,
        text: input
    });
    setInput('');
};

    return(
        
        <form 
            className="todo-form"
            onSubmit={handleSubmit}
        >
        {todoProp.edit ? (
            <>
                <input 
                    type="text" 
                    placeholder="Update to todo"
                    value={input}
                    name="text"
                    className="todo-input-update"
                    onChange={handleChange}
                    ref={inputRef}
                />
                    <button className="todo-button">Update</button>
            </>
            ) 
            :
            (
            <>
                <input 
                type="text" 
                placeholder="Add to todo"
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange}
                ref={inputRef}
                />
                <button className="todo-button">Add</button>
            </> 
            )
        }
        </form>  
    );
}