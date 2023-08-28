import React from 'react'
import "./Widget.css"


import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


export default function Widget({type}) {

    const amount= 100
    const diff=20

    let data;


        // eslint-disable-next-line default-case
        switch(type){
            case "user":
                data={
                    title:"USERS",
                    isMoney:false,
                    link:" See all user",
                    icon:<PersonIcon className='icon-w' style={{color:"crimson"
                ,backgroundColor:"rgba(255,165,32,0.2)"}}/>
                };
                break;

            case "order":
                data={
                    title:"ORDERS",
                    isMoney:false,
                    link:" View all oerders",
                    icon:<ShoppingBasketIcon className='icon-w'
                    style={{color:"goldenrod"
                ,backgroundColor:"rgba(218,165,32,0.2)"}}/>
                };
                break;

            case "eraring":
                data={
                    title:"ERARING",
                    isMoney:true,
                    link:"View net eraring",
                    icon:<MonetizationOnIcon className='icon-w'
                    style={{color:"green"
                ,backgroundColor:"rgba(0,128,0,0.2)"}}/>
                };
                break;

            case "balance":
                data={
                    title:"BALANCE",
                    isMoney:true,
                    link:" See details",
                    icon:<AccountBalanceWalletIcon className='icon-w'
                    style={{color:"purple"
                ,backgroundColor:"rgba(128,0,128,0.2)"}}/>
                };
                break;
                

                

        }


  return (
    <div className='Widget'>
        <div className="left">
            <span className="title-w">{data.title}</span>
            <span className="counter-w">{data.isMoney && "$"} {amount}</span>
            <span className='link'> {data.link}</span>
        </div>
        <div className="right">
            <div className="percentage postive">
                <KeyboardArrowUpIcon/>
                {diff}%
            </div>

                {data.icon}

        </div>
        
    </div>
  )
}
