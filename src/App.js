import './App.css';
import Navbar from './components/Navbar';
import TaskList from './components/Tasklist';
import Footer from './components/Footer'; 
import { useState } from 'react';


function App() { 

  const todayTasks = JSON.parse(localStorage.getItem('todayTasks')) || []
  const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || []

  let sum = 0
  completedTasks.map(task => task.points).forEach(points => sum = sum + points)

  const [progress, setProgress] = useState(sum)

  const increaseProgress = (points) => {
    setProgress(progress + points)
  }

  return (
    <div className="container">
      <Navbar progress={progress}/>
      <div style={{paddingTop: '60px'}}>
        <TaskList todayTasks={todayTasks} completedTasks={completedTasks} increaseProgress={(points) => increaseProgress(points)}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
