import './Task.css'


export interface ITask {
    [x: string]: any
    id: string,
    name: string;
    priority: number;
    doneStatus: boolean;
}


// interface to pass functions from outside
interface Props {
    task: ITask;
    onDelete(taskNameToDelete: string): void; 
    onPrioChange(taskNameToChangePrio: string, newPriority: number): void;
    onDoneStatusChange(taskNameToChangePrio: string, newDoneStatus: boolean): void;
}

export const Task = ( {task, onDelete, onPrioChange, onDoneStatusChange}:Props ) => {

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
            <input type="checkbox" checked={task.doneStatus} onClick={() => onDoneStatusChange(task.id, !task.doneStatus)}/>
            <div className="prioLightning">
                <div className={setOpacity(task.priority, 1)}  onClick={() => onPrioChange(task.id, 1)}>  ⚡ </div>
                <div className={setOpacity(task.priority, 2)}  onClick={() => onPrioChange(task.id, 2)}>  ⚡ </div>
                <div className={setOpacity(task.priority, 3)}  onClick={() => onPrioChange(task.id, 3)}>  ⚡ </div>
            </div>
            <div className="taskAndDeleteButton">
                <input className={setTaskDoneStyling()} type="text" disabled={true} value={task.name} />
                <input className="deleteButton" type="button" value="Delete" onClick={ () => {onDelete(task.id)} } /> 
            </div>            
        </div>
    ); 
}