import React from 'react'
import "./list.css"
import Sidebar from '../../compontents/sidebar/Sidebar'
import Navbar from '../../compontents/navbar/Navbar'
import DataTable from '../../compontents/datatable/DataTable'

export default function List() {
  return (
    <div className='list'>
       
      <Sidebar/>
      
      <div className="listContainer">
      
      <Navbar/>
      <DataTable/>
      </div>
    </div>
  )
}
