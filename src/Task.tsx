import { useState } from 'react';
import './Task.css'


export interface ITask {
    id: string,
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

    return (
        <div className="task">            
            <input type="checkbox" defaultChecked={task.doneStatus} checked={task.doneStatus === true ? true : false} onClick={() => setDoneStatus(task.name, !task.doneStatus)}/>
            <div className="prioLightning">
                <div className={setOpacity(task.priority, 1)}  onClick={() => changePriority(task.id, 1)}>  ⚡ </div>
                <div className={setOpacity(task.priority, 2)}  onClick={() => changePriority(task.id, 2)}>  ⚡ </div>
                <div className={setOpacity(task.priority, 3)}  onClick={() => changePriority(task.id, 3)}>  ⚡ </div>
            </div>
            <div className="taskAndDeleteButton">
                <input className={setTaskDoneStyling()} type="text" value={task.name} />
                <input className="deleteButton" type="button" value="Delete" onClick={ () => {deleteTask(task.id)} } /> 
            </div>            
        </div>
    ); 
}