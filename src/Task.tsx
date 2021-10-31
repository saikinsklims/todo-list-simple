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
    changePriority(taskNameToChangePrio: string, newPriority: number): void;
    setDoneStatus(taskNameToChangePrio: string, newDoneStatus: boolean): void;
}

export const DisplayTask = ( {task, deleteTask, changePriority, setDoneStatus}:Props ) => {

    // sets the task to done
    const setTaskDoneStyling = () => {

        if(task.doneStatus) {
            return ("taskDone")
        } else {
            return ("taskUndone")
        }
    }

    // sets dynamic styling of priority icons according tasks priority state
    const setOpacity = (prio: number, iconOrder: number) => {

        if (iconOrder === 1) {
            return "highOpacity"
        }
        if (prio >= 2 && iconOrder === 2) {
            return "highOpacity"
        } else if (prio < 2 && iconOrder === 2) {
            return "lowOpacity"
        }
        if (prio === 3 && iconOrder === 3) {
            return "highOpacity"
        } else {
            return "lowOpacity"
        }
    }

    // FIXME: setDoneStatus is currently always false --> set this according checkbox status
    return (
        <div className="task">            
            <input type="checkbox" name="checkDone" defaultChecked={task.doneStatus} onClick={() => setDoneStatus(task.name, false)}/>
            <div className="prioLightning">
                <div className={setOpacity(task.priority, 1)}  onClick={() => changePriority(task.name, 1)}>  ⚡ </div>
                <div className={setOpacity(task.priority, 2)}  onClick={() => changePriority(task.name, 2)}>  ⚡ </div>
                <div className={setOpacity(task.priority, 3)}  onClick={() => changePriority(task.name, 3)}>  ⚡ </div>
            </div>
            <div className="taskAndDeleteButton">
                <input className={setTaskDoneStyling()} type="text" value={task.name} />
                <input className="deleteButton" type="button" value="Delete" onClick={ () => {deleteTask(task.name)} } /> 
            </div>            
        </div>
    ); 
}