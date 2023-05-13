import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./Login";
import { Dashboard } from "./Dashboard";
import {Application}from "./Application";
import {VehicleType} from "./VechileType";
import "./App.css"
import { Service } from "./ServiceList";
import { ServiceAdd } from "./ServiceAdd";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path="/application" element={<Application />}></Route>
        <Route path="/vechiletype" element={<VehicleType />}></Route>
        <Route path="/servicelist" element={<Service />}></Route>
        <Route path="/serviceadd" element={<ServiceAdd />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export {App};

