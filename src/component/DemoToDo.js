import React, { useState } from 'react';

export default function DemoToDo() {
  const [todoitem, setToDoitem] = useState("");
  const [todoitems, setToDoitems] = useState([]);

  const handleChange = (e) => {
    setToDoitem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setToDoitems([...todoitems, todoitem]);
    
    setToDoitem("");
  };

  return (
    <div>
      <h2 > To-do list App</h2>
      <form onSubmit={handleSubmit}> 
        <input value={todoitem} type='text' onChange={handleChange} />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {todoitems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
