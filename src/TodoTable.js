import React from "react";
import'ag-grid-community/dist/styles/ag-grid.css'
import'ag-grid-community/dist/styles/ag-theme-material.css'




const colums = [
  {field: "description"},
  {field: "date"},
  {field: "priority"}
]

export default function TodoTable(props) {
  return (<div></div>)

   /* <div className="ag-theme-material" style={{height:'700px', width: '110%', margin: 'auto'}}>
        <AgGridReact
          columnDefs={colums}
          rowData={todos}>
          </AgGridReact>
         </div> */




   /* <div>
        <table>
        <tbody>
            {props.todos.map((todo, index) => (
            <tr key={index}>
                <td>{todo.desc}</td>
                <td>{todo.date}</td>
                <td>{todo.priority}</td>
                <td>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div> */
  
}
