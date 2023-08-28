import React from 'react'
import "./Home.css"
import Sidebar from '../../compontents/sidebar/Sidebar'
import Navbar from '../../compontents/navbar/Navbar'
import Widget from '../../compontents/widget/Widget'
import Featured from '../../compontents/featured/Featured'
import Chart from '../../compontents/chart/Chart'
import TableBaic from '../../compontents/table/TableBaic'
export default function Home() {
  return (
    <div className='Home'>
       <Sidebar/>
       <div className="homeContainer">
        <Navbar/>
       <div className="widegts">
       <Widget type="user"/>
       <Widget type="order"/>
       <Widget type="eraring"/>
       <Widget type="balance"/>
       </div>
       <div className="charts">
       <Featured/>
       <Chart/>
       </div>
       <div className="ListContainer">
        <div className="lsitTitle">
          Latest Transactions
        </div>
        <TableBaic/>
       </div>
        
       </div>
    </div>
  )
}

