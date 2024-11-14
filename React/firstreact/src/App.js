import React from 'react';
import './Style.css';
//import heabodyfooter from './components/heabodyfooter';
//import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import TaskList from './components/TaskList';
// import ClickButton from "./components/ClickButton"
// import Displaymessage from './components/Displaymessage';
//import Greetings from './components/Greetings';
//import Profilecard from './components/Profilecard';
//import UserInput from './components/UserInput';
function App() {


// return(
//   <>
//   <UserInput/>
//   </>
// )
return(
  <>
  <Homepage />
  <TaskList />
  </>
)
}
export default App;
