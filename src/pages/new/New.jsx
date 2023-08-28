import React, { useState } from 'react'
import "./New.css"
import Sidebar from '../../compontents/sidebar/Sidebar'
import Navbar from '../../compontents/navbar/Navbar'
import NoImg from "../../img/noImage.jpeg"
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import UsreInput from "../../formSoucer"

export default function New({title}) {

  const [file,setFile] = useState("")

  return (
    <div className='New'>
      <Sidebar/>
      <div className="newcontainer">
        <Navbar/>
        <div className="topNew">
          <h1>{title}</h1>
        </div>
        <div className="bottomNew">
          <div className="leftBottomNew">
            <img src={
              file ? URL.createObjectURL(file)
              : NoImg
            } alt={NoImg} />
          </div>
          <div className="rightBottomNew">
            <form action="">
              <div className="formInput">
                <label htmlFor='file'>Image:<DriveFileMoveIcon className='icon'/></label>
                <input type="file" 
                onChange={e=>setFile(e.target.files[0])}  />
              </div>
             
             {
              UsreInput.map(
                (input) =>(
                  <div className="formInput"key={input.id} >
                <label >{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
                )
              )
             }
     
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}
