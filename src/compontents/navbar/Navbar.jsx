import React from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Img_1 from "../../img/default-avatar.png"
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search....' />
          <SearchIcon className='icons'/>
        </div>
        <div className="item">
          <LanguageIcon  className='icons'/>
          English
        </div>

        <div className="item">
          <DarkModeIcon  className='icons'/>
         
        </div>

        <div className="item">
          <FullscreenExitIcon  className='icons'/>
         
        </div>

        <div className="item">
          <CircleNotificationsIcon  className='icons'/>
          <div className="counter">1</div>
         
        </div>

        <div className="item">
          <ChatBubbleIcon  className='icons'/>
          <div className="counter">5</div>

        </div>

        <div className="item">
          <FormatListBulletedIcon  className='icons'/>
         
        </div>
        <div className="item">
        
        <img src={Img_1} alt="" className='avater' />
         
        </div>
      </div>
    </div>
  )
}
