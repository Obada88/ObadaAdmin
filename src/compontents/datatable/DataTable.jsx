import React from 'react'
import "./DataTable.css"
import { DataGrid } from '@mui/x-data-grid';
import {columns,rows} from "../../../src/DataTableserous"
import { Link } from 'react-router-dom';

export default function DataTable() {
  
  const actionCol= [
   {
    field: 'action', headerName: 'Action',with:200,
    renderCell: ()=>{
      return(
        <div className="cellAction">
          <Link to="/users/test" style={{textDecoration:"none"}}>
          <div className="viewButton">view</div>
          </Link>
          
          <div className="deleteButton">delete</div>
        </div>
      )
     }
   },
   
  ]
  return (
    
    <div className='DataTable'>
      <div className="titleDataTable">
        Add New Users
        <Link to="/users/new" style={{textDecoration:"none"}} className='linkTal'>
          Add New
        </Link>
      </div>
        <div >
        <DataGrid className="tableGrid"
        rows={rows}
        columns={columns.concat(actionCol)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
        </div>
    </div>
  )
}
