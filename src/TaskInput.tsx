import { ChangeEvent, useState } from 'react';
import './TaskInput.css'


interface Props {
    onAddTask(taskName: string) : void
    onFilterChange(status: boolean) : void
    onInputFieldChange(taskName: string) : void
    onSortByPrio(priorityStatus : number) : void
}

export const TaskInput = ({onAddTask, onFilterChange, onInputFieldChange, onSortByPrio}:Props) => {

    const [taskName, setTaskName] = useState<string>("")
    const [showAllChecked, setShowAllChecked] = useState<boolean>(true)
    const [prioritySort, setPrioritySort] = useState<number>(0)

    // handle text changes
    const updateTaskName = (event: ChangeEvent<HTMLInputElement>): void => {
        onInputFieldChange(taskName)
        if(event.target.name === "text") {
            setTaskName(event.target.value)
        }   
    }

    // send information to parent and reset own field
    const addTaskAndUpdateField = () => {
        onAddTask(taskName)
        setTaskName("")
    }

    // update of if filtering of done tasks is enabled
    const updateDoneFiltering = () => {
        setShowAllChecked(!showAllChecked)
        onFilterChange(showAllChecked)
    }

    // check if adding an additional task is allowed
    const checkAddTaskAllowed = () => {
        let retVal = true
        if (taskName.length !== 0) {
            retVal = false
        }
        return retVal
    }

    // set how to sort, 0 = no sort, 1 = high prio, 2 = low prio
    const setHowToSort = () => {
        setPrioritySort(prioritySort + 1)
        if (prioritySort > 1) {
            setPrioritySort(0)
        }
        onSortByPrio(prioritySort)
    }
    // adds an arrow indicator for current sort status
    const addSortArrow = () => {
        if (prioritySort === 0) {
            return "⇉"
        } else if (prioritySort === 1) {
            return "⇈"
        } else if (prioritySort === 2) {
            return "⇊"
        }
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
            <div className="sortByPrio" onClick={setHowToSort}> Kick to sort by priority {addSortArrow()}</div>
        </div>
    );

}
