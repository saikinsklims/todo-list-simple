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
    const [taskDoneStyling, setTaskDoneStyling] = useState("taskUndone");

    // sets task priority according selected icons
    const changePrio = (prio: number) => {
        task.priority = prio;
        if (task.priority === 1) {
            setprioIcon1Opacity("highOpacity");
            setprioIcon2Opacity("lowOpacity");
            setprioIcon3Opacity("lowOpacity");
        } else if (task.priority === 2) {
            setprioIcon1Opacity("highOpacity");
            setprioIcon2Opacity("highOpacity");
            setprioIcon3Opacity("lowOpacity");
        } else if (task.priority === 3) {
            setprioIcon1Opacity("highOpacity");
            setprioIcon2Opacity("highOpacity");
            setprioIcon3Opacity("highOpacity");
        }
    }

    // sets the task to done
    const setTaskDone = () => {
        // change status of task
        task.doneStatus = !task.doneStatus;

        if(task.doneStatus) {
            setTaskDoneStyling("taskDone")
        } else {
            setTaskDoneStyling("taskUndone")
        }
    }

    return (
        <div className="task">            
            <input type="checkbox" name="checkDone" onChange={() => setTaskDone()}/>
            <div className="prioLightning">
                <div className={prioIcon1Opacity}  onClick={() => changePrio(1)}>  ⚡ </div>
                <div className={prioIcon2Opacity}  onClick={() => changePrio(2)}>  ⚡ </div>
                <div className={prioIcon3Opacity}  onClick={() => changePrio(3)}>  ⚡ </div>
            </div>
            <div className="taskAndDeleteButton">
                <input className={taskDoneStyling} type="text" value={task.name} />
                <input className="deleteButton" type="button" value="Delete" onClick={ () => {deleteTask(task.name)} } /> 
            </div>            
        </div>
    ); 
}