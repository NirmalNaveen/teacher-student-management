import React from "react";
import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import StudentCreate from "./components/StudentCreate";
import StudentTable from "./components/StudentTable";
import TeacherCreate from "./components/TeacherCreate";
import TeacherTable from "./components/TeacherTable";
import Create from "./components/Create";
import View from "./components/View";
import NavigationBar from "./components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
      <Route path="View" element={<View/>}/>
      <Route path="TeacherTable" element={<TeacherTable/>}/>
      <Route path="StudentTable" element={<StudentTable/>}/>
      <Route path="Create" element={<Create/>}/>
      <Route path="TeacherCreate" element={<TeacherCreate/>}/>
      <Route path="StudentCreate" element={<StudentCreate/>}/>
    </Routes>
    </BrowserRouter>   
  )
}

export default App;
