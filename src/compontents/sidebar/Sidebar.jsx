import React from 'react'
import "./Sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className="top">
           <Link to="/" style={{textDecoration:"none"}}>
           <span >Obada Admin</span>
           </Link>
        </div>
        <hr />
        <div className="center">
            <h5 className='title'>MAIN</h5>
            <ul>
            <li>
                <DashboardIcon className='icon'/>
            <span>Dashboard</span>
            </li>
            <h5 className='title'>LIST</h5>
            <li>
                <PersonIcon className='icon'/>
           <Link to="/users"  style={{textDecoration:"none"}}>
           <span>Users</span>
           </Link>
            </li>
            <li>
                <StorefrontIcon className='icon'/>
                <Link to="/products"  style={{textDecoration:"none"}}>
                <span>Porducts</span>
           </Link>
            
            </li>
            <li>
                <CreditCardIcon className='icon'/>
            <span>Orderd</span>
            </li>
            <li>
                <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
            </li>
            <h5 className='title'>USEFULL</h5>
            <li>
                <LeaderboardIcon className='icon'/>
            <span>Stats</span>
            </li>
            <li>
                <CircleNotificationsIcon className='icon'/>
            <span>Notifiaction</span>
            </li>
            <h5 className='title'>SERVICSE</h5>
            <li>
                <SettingsSystemDaydreamIcon className='icon'/>
            <span>System Health</span>
            </li>
            <li>
            
                <PsychologyIcon className='icon'/>
            <span>Logs</span>
            </li>
            <li>
                <SettingsIcon className='icon'/>
            <span>Stteings</span>
            </li>
            <h5 className='title'>USER</h5>
            <li>
                <AccountCircleIcon className='icon'/>
            <span>Porfile</span>
            </li>
            <li>
                <LogoutIcon className='icon'/>
            <span>Logout</span>
            </li>
            </ul>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}
