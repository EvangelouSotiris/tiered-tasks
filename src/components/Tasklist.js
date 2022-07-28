import Task from "./Task"
import { useState, useEffect } from "react"

const TaskList = (props) => {

    const [tasksForTheDay, setTasksForTheDay] = useState(props.todayTasks)

    const [completedTasks, setCompletedTasks] = useState(props.completedTasks)

    const [errMessage, setErrMessage] = useState(false)

    let max = 1
    if (props.completedTasks.length > 0 || props.todayTasks.length > 0) {
        let existingKeys = [...props.completedTasks.map(task => task.key), ...props.todayTasks.map(task => task.key)]
        max = Math.max.apply(null, existingKeys)
    }
    
    const [maxKey, setMaxKey] = useState(max)

    useEffect(() => {
        localStorage.setItem('todayTasks', JSON.stringify(tasksForTheDay));
    }, [tasksForTheDay]);

    useEffect(() => {
        localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    }, [completedTasks]);
    
    const saveNew = (title, points, key) => {
        if (points < 10 || points > 50) {
            setErrMessage(true)
        } else {
            setErrMessage(false)
            setTasksForTheDay([...tasksForTheDay.filter(task => task.key !== key), { title, points: parseInt(points), type: 1, key}])
        }
    }

    const addNew = () => {
        setMaxKey(maxKey + 1)
        let tempTask = { key: maxKey, title: 'Enter title', points: 10, type: 0}
        setTasksForTheDay([...tasksForTheDay, tempTask])
    }

    const deleteTask = (key) => {
        setTasksForTheDay([...tasksForTheDay.filter(task => task.key !== key)])
    }

    const undoTask = (key) => {
        setTasksForTheDay([...tasksForTheDay.filter(task => task.key !== key)])
    }

    const completeTask = (key) => {
        let task = tasksForTheDay.find(task => task.key === key)
        setTasksForTheDay([...tasksForTheDay.filter(task => task.key !== key)])
        setCompletedTasks([...completedTasks, task ])
        props.increaseProgress(task.points)
    }

    return(
        <header className="tasklist">
            {errMessage && <h4 className="errMessage">Tasks give 10-50 points! 10 points for the easy peasy ones, 50 for the pain in the ass ones!</h4>}
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 className="todayTasks">Uncompleted tasks: {tasksForTheDay.length}</h3>   
                <button onClick={addNew} className="addNewTask">New</button>
            </div>
            {tasksForTheDay.map(task => 
                <div key={task.key}>
                    <Task 
                    title={task.title} 
                    points={task.points} 
                    type={task.type} 
                    key={task.key} 
                    saveNew={(title, points) => saveNew(title, points, task.key)}
                    delete={() => deleteTask(task.key)}
                    undo={() => undoTask(task.key)}
                    completed={() => completeTask(task.key)}
                />
                </div>
            )}
            <div style={{display: 'flex', flexDirection: 'column', lineHeight: '20px'}}>
                <h3 className="todayTasks">Completed Archive: {completedTasks.length}</h3>
                {completedTasks.length > 0 && 
                    <ul style={{textDecoration: 'none', listStyle: 'none', marginLeft: '-25px'}}>
                        {completedTasks.map(task => <li key={task.key}>{task.title}</li>)}
                    </ul>
                }
                
            </div>
        </header>
    )
}

export default TaskList