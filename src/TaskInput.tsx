import { ChangeEvent, useState } from 'react';
import './TaskInput.css'


interface Props {
    onAddTask(taskName: string): void;
    onFilterChange(status: boolean): void;
}

export const TaskInput = ({ onAddTask, onFilterChange }: Props) => {

    const [taskName, setTaskName] = useState<string>("");
    const [showAllChecked, setShowAllChecked] = useState<boolean>(true)


    // handle text changes
    const updateTaskName = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "text") {
            setTaskName(event.target.value);
        }
    }

    // send information to parent and reset own field
    const addTaskAndUpdateField = () => {
        onAddTask(taskName);
        setTaskName("");
    }

    // update of if filtering of done tasks is enabled
    const updateDoneFiltering = () => {
        setShowAllChecked(!showAllChecked);
        onFilterChange(showAllChecked);
    }

    // check if adding an additional task is allowed
    const checkAddTaskAllowed = () => {
        let retVal = true

        if (taskName.length !== 0) {
            retVal = false
        }

        return retVal
    }

    return (
        <div className="taskInput">
            <div className="textAndButton">
                <input className="inputBox" placeholder="Type in your task ..." type="text" name="text" onChange={updateTaskName} value={taskName} />
                <input className="button" type="button" value="Add task" onClick={addTaskAndUpdateField} disabled={checkAddTaskAllowed()} />
            </div>
            <div className="checkBox">
                <input type="checkbox" name="filtering" defaultChecked={showAllChecked} onClick={updateDoneFiltering} />
                <label htmlFor="filtering"> Show all tasks </label>
            </div>
        </div>
    );

}
