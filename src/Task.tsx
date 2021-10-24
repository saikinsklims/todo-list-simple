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
            <input type="checkbox" name="checkDone"/>
            <div className="prioLightning">
                <div className="lowPrio">⚡</div>
                <div className="midPrio">⚡</div>
                <div className="highPrio">⚡</div>
            </div>
            <div className="infoAndText">
                <input type="text" value={task.name} />
                <input className="deleteButton" type="button" value="Delete" /> 
            </div>            
        </div>
    ); 
}