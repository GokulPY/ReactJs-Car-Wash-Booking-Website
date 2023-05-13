import "./dashboard.css";
import React from 'react';
import { Progress } from "./Progress";
import { useEffect, useState} from "react";
import {Chart} from "./Chart";
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import { DisplayPage } from "./DisplayPage";


function Dashboard(){
    let navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/Application');
      };

      const handleButtonClick1 = () => {
        navigate('/Dashboard');
      };

      const handleButtonClick2 = () => {
        navigate('/VechileType');
      };

      const handleButtonClick3 = () => {
        navigate('/ServiceList');
      };

    const [percent, setPercent]=useState(0);
    
  const increase = () => {
    if (percent + 10 > 100) return;
    setPercent(percent + 10);
  };

  useEffect(()=> {
    console.log(percent);
  }, [percent]);
  
    return(
        <>
        <div className="dimg">
            <img src="./Logoimg/washigniter.png" alt="Companylogo"/>
        </div>
        <div className="navbar">
            <ul>
                <li onClick={handleButtonClick1}><i class="fa-solid fa-gauge-high"></i> Dashboard</li>
                <li onClick={handleButtonClick2}><i class="fa-solid fa-sheet-plastic"></i> Vehicle Type</li>
                <li onClick={handleButtonClick3}><i class="fas fa-list"></i> Service List</li>
                <li><i class="fas fa-box-open"></i> Packages</li>
                <li><i class="fas fa-calendar-alt"></i> Booking</li>
                <li><i class="fas fa-credit-card"></i> Payments</li>
                <li><i class="fas fa-ban"></i> Out of Service</li>
                <li><i class="fas fa-chart-bar"></i> Reports</li>
                <li><i class="fas fa-cogs"></i> Integration</li>
                <li><i class="fas fa-cog"></i> Settings</li>
            </ul>
        </div>
        <div className="headerd">
        <i class="fa-solid fa-bars"></i>
        <h5 onClick={handleButtonClick}>View Frontend</h5>
            <select>
                <option>admin</option>
                <option>Setting</option>
                <option>Profile</option>
                <option>Logout</option>
            </select>
        </div>
        <div className="header2">
            <h3>Dashboard</h3>
            <h4><span>Dashboard </span>/ Dashboard</h4>
        </div>

        <div className="progress">
            <div className="p1">
                
                <h3>0</h3>
                <i className="ib" class="fa-solid fa-cart-shopping"></i>
                <h4>Service</h4>
                <Progress percent={percent + "%"}/>
                <button onClick={increase}></button>
            </div>

            <div className="p2">
                <i className="isb" class="fa-solid fa-users"></i>
                <h3>0</h3>
                <h4>Total Booking</h4>
                <Progress percent={percent + "%"}/>
            </div>

            <div className="p3">
                <i className="ig" class="fa-sharp fa-solid fa-dollar-sign"></i>
                <h3>0</h3>
                <h4>Today Booking</h4>
                <Progress percent={percent + "%"}/>
            </div>

            <div className="p4">
                <i className="ir" class="fa-solid fa-bag-shopping"></i>
                <h3>0</h3>
                <h4>Today Confirmed</h4>
                <Progress percent={percent + "%"}/>
            </div>
        </div>

        <div className="chartbar">
            <h3>Total Booking</h3>
            <Chart/>
        </div>
        
        <div className="display">
            <h5 onClick={handleButtonClick2}>Add New +</h5>
            <h3>Latest Order</h3>
            <DisplayPage/>
        </div>
        </>
    )
}
export {Dashboard};