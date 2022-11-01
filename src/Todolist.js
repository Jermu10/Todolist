import React, { useState } from "react"
import { useRef } from "react"
import { AgGridReact } from'ag-grid-react'
import'ag-grid-community/dist/styles/ag-grid.css'
import'ag-grid-community/dist/styles/ag-theme-material.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import AdapterMoment from '@mui/x-date-pickers/AdapterMoment'
import { SettingsOverscanOutlined } from "@mui/icons-material"
import { DesktopDatePicker } from "@mui/x-date-pickers"



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
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <TextField type="text" placeholder="description" name="description" value={todo.description} onChange={inputChanged} />
            <TextField type="date" name="date" value={todo.date} onChange={inputChanged} />
            <TextField type="text" placeholder="Priority" name="priority" value={todo.priority} onChange={inputChanged} />
            <Button onClick={addTodo} variant="contained">Add</Button>
            <Button type="button" value="delete" onClick={deleteRow} variant="outlined">Delete</Button>
          </Stack>
          
          
          <div className="ag-theme-material" style={{height:'800px', width: '100%', margin: 'auto'}}>
          <AgGridReact
            columnDefs={colums}
            rowData={todos}
            rowSelection="single"
            ref={gridRef}
            onGridReady={params => gridRef.current = params.api}
            animateRows="true">
          </AgGridReact>
          </div>
            
        </div>
      


    );
  }


