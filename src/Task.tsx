import { useState } from 'react';
import './Task.css'


export interface ITask {
    name: string;
    priority: number;
    doneStatus: boolean;
}


// interface to pass functions from outside
interface Props {
    task: ITask;
    deleteTask(taskNameToDelete: string): void; 
}

export const DisplayTask = ( {task, deleteTask}:Props ) => {

    const [prioIcon1Opacity, setprioIcon1Opacity] = useState("highOpacity");
    const [prioIcon2Opacity, setprioIcon2Opacity] = useState("highOpacity");
    const [prioIcon3Opacity, setprioIcon3Opacity] = useState("highOpacity");

    const changePrioLow = () => {
        task.priority = 0;
        console.log(task.name);
        console.log(task.priority)
        setprioIcon1Opacity("highOpacity");
        setprioIcon2Opacity("lowOpacity");
        setprioIcon3Opacity("lowOpacity");
    }
    const changePrioMid = () => {
        task.priority = 1;
        console.log(task.name);
        console.log(task.priority)
        setprioIcon1Opacity("highOpacity");
        setprioIcon2Opacity("highOpacity");
        setprioIcon3Opacity("lowOpacity");
    }
    const changePrioHigh = () => {
        task.priority = 2;
        console.log(task.name);
        console.log(task.priority)
        setprioIcon1Opacity("highOpacity");
        setprioIcon2Opacity("highOpacity");
        setprioIcon3Opacity("highOpacity");
    }

    const setTaskDone = () => {
        // change status of task
        task.doneStatus = !task.doneStatus;
        console.log(task.name);
        console.log(task.doneStatus);
    }

    return (
        <div className="task">            
            <input type="checkbox" name="checkDone" onChange={setTaskDone}/>
            <div className="prioLightning">
                <div className={prioIcon1Opacity}  onClick={changePrioLow}>  ⚡ </div>
                <div className={prioIcon2Opacity}  onClick={changePrioMid}>  ⚡ </div>
                <div className={prioIcon3Opacity}  onClick={changePrioHigh}> ⚡ </div>
            </div>
            <div className="taskAndDeleteButton">
                <input type="text" value={task.name} />
                <input className="deleteButton" type="button" value="Delete" onClick={ () => {deleteTask(task.name)} } /> 
            </div>            
        </div>
    ); 
}