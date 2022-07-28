import { useState } from "react"

const Task = (props) => {

    const [ title, setTitle ] = useState("")
    const [points, setPoints] = useState(0)

    return(
        <div className="task">
            <div className="titleAndPoints">
                {props.type === 0
                ? <input style={{height: '2em', maxWidth: '50%'}} type='text' placeholder={props.title} value={title} onChange={e => setTitle(e.target.value)}/>
                : <h3>{props.title}</h3>
                }
                
                {props.type === 0
                ? <h4 style={{color: '#44AF69'}}><input type='number' style={{height: '2em',width: '40px'}} value={points} onChange={e => setPoints(e.target.value)}/> points</h4>
                : <h4 style={{color: '#44AF69'}}>{props.points} points</h4>
                }
            </div>
            <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
            {props.type === 0
            ? <button onClick={() => props.saveNew(title, points)} className="btn" style={{backgroundColor: '#44AF69', color: 'white'}}>Save</button>
            : <h4>Completed <input type="checkbox" onChange={props.completed} /></h4>
            }

            {props.type === 0
            ? <button onClick={() => props.undo()} className="btn" style={{backgroundColor: 'red', color: 'white'}}>Undo</button>
            : <button className="btn" style={{backgroundColor: 'red', color: 'white'}} onClick={() => props.delete()}>Delete</button>
            }
            </div>
        </div>
    )
}

export default Task