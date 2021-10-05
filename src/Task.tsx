import './Task.css'


export interface ITask {
    name: string;
    priority: number;
    doneStatus: boolean;
}



interface Props {
    task: ITask;
}

export const DisplayTask = ( {task}:Props ) => {

    return (
        <div className="task">
            <div className="content">
                <div><input type="checkbox"  name="checkDone"/></div>
                <div className="lowPrio">⚡</div>
                <div className="midPrio">⚡</div>
                <div className="highPrio">⚡</div>
                <div className="taskText"><input type="text" value={task.name} /></div>
            </div>
            <input type="button" name="deleteButton"   />
        </div>
    ); 
}