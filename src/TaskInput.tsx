import { ChangeEvent, useState } from 'react';
import './TaskInput.css'


interface Props {
    addTask(taskName : string) : void;
    setDoneFilterStatus(status : boolean):void;
}

export const TaskInput = ({addTask, setDoneFilterStatus}:Props) => {

    const [taskName, setTaskName] = useState<string>("");
    const [showAllChecked, setShowAllChecked] = useState<boolean>(true)


    // handle text changes
    const updateTaskName = (event: ChangeEvent<HTMLInputElement>): void => {
        if(event.target.name === "text") {
            setTaskName(event.target.value);
        }
    }

    // send information to parent and reset own field
    const addTaskAndUpdateField = () => {
        addTask(taskName);
        setTaskName("");
    }

    const updateDoneFiltering = () => {
        setShowAllChecked(!showAllChecked)
        setDoneFilterStatus(showAllChecked)
    }

    return (
        <div className="taskInput">
            <div className="textAndButton">
                <input className="inputBox" placeholder="Type in your task ..." type="text" name="text" onChange={updateTaskName} value={taskName}/>
                <input className="button" type="button" value="Add task" onClick={addTaskAndUpdateField} />
            </div>
            <div className="checkBox">
                <input type="checkbox" name="filtering" defaultChecked={showAllChecked} onClick={updateDoneFiltering}/>
                <label htmlFor="filtering"> Show all tasks </label>
            </div>
        </div>
    );

}
