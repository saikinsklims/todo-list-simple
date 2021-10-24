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

    const changePrioLow = () => {
        task.priority = 0;
        console.log(task.name);
        console.log(task.priority)
    }
    const changePrioMid = () => {
        task.priority = 1;
        console.log(task.name);
        console.log(task.priority)
    }
    const changePrioHigh = () => {
        task.priority = 2;
        console.log(task.name);
        console.log(task.priority)
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
                <div className="lowPrio"  onClick={changePrioLow}>  ⚡ </div>
                <div className="midPrio"  onClick={changePrioMid}>  ⚡ </div>
                <div className="highPrio" onClick={changePrioHigh}> ⚡ </div>
            </div>
            <div className="taskAndDeleteButton">
                <input type="text" value={task.name} />
                <input className="deleteButton" type="button" value="Delete" onClick={ () => {deleteTask(task.name)} } /> 
            </div>            
        </div>
    ); 
}