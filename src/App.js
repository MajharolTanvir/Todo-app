import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calender from './Pages/Calender/Calender';
import CompletedTask from './Pages/CompletedTask/CompletedTask';
import Todo from './Pages/Todo/Todo';
import Navbar from './shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Todo></Todo>}></Route>
        <Route path='/completed' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;
