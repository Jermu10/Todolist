import React, { useState } from "react"
import { useRef } from "react"
import { AgGridReact } from'ag-grid-react'
import'ag-grid-community/dist/styles/ag-grid.css'
import'ag-grid-community/dist/styles/ag-theme-material.css'



 export default function Todolist() {
  
    const [todo, setTodo] = useState({ description: "", date: "" , priority: ""});
    const [todos, setTodos] = useState([]);
    const gridRef = useRef()

    const colums = [
      {field: "description", sortable: "true"},
      {field: "date", sortable: "true"}, 
      {field: "priority", sortable: "true", filter: true,
      cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}}
      
    ]

    const deleteRow = () => {
      if(gridRef.current.getSelectedNodes().length > 0){
      setTodos(todos.filter((todo, index) => gridRef.current.getSelectedNodes()[0].childIndex))
    } else {
    alert("Select row first")
    }
  }

    const inputChanged = (event) => {
      setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const addTodo = (event) => {
      event.preventDefault();
      setTodos([...todos, todo]);
      setTodo({description: "", date: "", priority: ""})
    };



    return (
      
      <div className="App">
          <form onSubmit={addTodo}>
            <input type="text" placeholder="description" name="description" value={todo.description} onChange={inputChanged} />
            <input type="date" name="date" value={todo.date} onChange={inputChanged} />
            <input type="text" placeholder="Priority" name="priority" value={todo.priority} onChange={inputChanged} />
            <input type="submit" value="Add" />
            <input type="button" value="delete" onClick={deleteRow} />
          </form>
          
          
          <div className="ag-theme-material" style={{height:'800px', width: '100%', margin: 'auto'}}>
          <AgGridReact
            columnDefs={colums}
            rowData={todos}
            rowSelection="single"
            ref={gridRef}
            onGridReady={params => gridRef.current = params.api}>
          </AgGridReact>
          </div>
            
        </div>
      


    );
  }


