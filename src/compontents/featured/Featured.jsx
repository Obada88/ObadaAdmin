import React from 'react'
import "./Featured.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
export default function Featured() {
  return (
    <div className='Featured'>
        <div className="top">
            <h1 className='title-fe'>Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom-fa">
            <div className="featuerdChatr">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>

            <p className="title-ch">Total sales made today</p>
            <p className="amount-ch">$420</p>
            <p className="desc">Previous transaction processing 
            . Last payment may not be included.</p>

            <div className="summery">
              <div className="item-sum">
                <div className="itemTitle">Traget</div>
                <div className="itemResult positive">
                  <KeyboardControlKeyIcon fontSize='small'/>
                </div>
                <div className="resultAmount positive">12.5k</div>
              </div>
              <div className="item-sum">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult negtive ">
                  <KeyboardArrowDownIcon fontSize='small'/>
                </div>
                <div className="resultAmount negtive">12.5k</div>
              </div>
              <div className="item-sum">
                <div className="itemTitle positive">Last Month</div>
                <div className="itemResult positive">
                  <KeyboardControlKeyIcon fontSize='small'/>
                </div>
                <div className="resultAmount positive">12.5k</div>
              </div>
            </div>
        </div>
    </div>
  )
}
