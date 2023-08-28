import React from 'react'
import "./Single.css"
import Sidebar from "../../compontents/sidebar/Sidebar" 
import Navbar from "../../compontents/navbar/Navbar" 
import TableBaic from "../../compontents/table/TableBaic" 
import ImgSingle from "../../img/default-avatar.png"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'February',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'March',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'April',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'May',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'June',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Augast',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function Single() {
  return (
    <div className='Single'>
      <Sidebar/>
      <div className="SingleContainer">
        <Navbar/>
        <div className="topSingle">
          <div className="leftSingle">
            <div className="editButton">Edit</div>
            <h1 className="titleSingle">infromation</h1>

          <div className="itemSingle">
          <img src={ImgSingle} alt={ImgSingle} className="itemImg" />
          </div>

            <div className="detailes">
              <h1 className="itemtitle">Obada Jehad</h1>
              <div className="detailesItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">Obada@gamil.com</span>
              </div>

              <div className="detailesItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+1 256 899 741</span>
              </div>

              <div className="detailesItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Gaza </span>
              </div>

              <div className="detailesItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Plastine</span>
              </div>
            </div>
          </div>
          <div className="rightSingle">
          <ResponsiveContainer width="100%" height="100%" >
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
          </div>
        </div>

        <div className="bottomSingle" style={{padding:"20px"}}>
        <h1 className="titleSingle">Last Transactions</h1>
         <TableBaic/>
        </div>
        SingleContainer
      </div>
    </div>
  )
}
