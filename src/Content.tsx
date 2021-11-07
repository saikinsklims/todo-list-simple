import './Content.css'
import { useState } from 'react';
import { ITask } from './Task';
import { TaskInput } from './TaskInput'
import { TaskField } from './TaskField'


// start id for tasks
let taskIdCurr = 1;

export const Content = () => {

    const [taskList, setTaskList] = useState<ITask[]>([])
    const [enableDoneFiler, setenableDoneFiler] = useState<boolean>(false)
    const [taskListFilter, setTaskListFilter] = useState<string>(" ")
    const [sortCriteria, sortByCriteria] = useState<string>("")

    // adds tasks into taskLis
    const addTask = (taskName: string): void => {
        const newTask = { id: (taskIdCurr++).toString(), name: taskName, priority: 0, doneStatus: false }
        setTaskList([...taskList, newTask]);
        setTaskListFilter("")
    }

    // delete task (filter by name)
    const deleteTask = (idToDelete: string): void => {
        setTaskList(taskList.filter((task) => { return task.id !== idToDelete }))
    }

    // changes priority of task
    const changePriority = (idToChange: string, newPriority: number): void => {
        const newTasksList = taskList.map(task => {
            if (task.id === idToChange) {
                return { ...task, priority: newPriority }
            }
            return task
        });
        setTaskList(newTasksList);
    }

    // changes task status to done or not
    const setDoneStatus = (idToChangeStatusDone: string, newDoneStatus: boolean): void => {
        const newTasksList = taskList.map(task => {
            if (task.id === idToChangeStatusDone) {
                return { ...task, doneStatus: newDoneStatus }
            }
            return task
        });
        setTaskList(newTasksList);
    }

    // change status of filtering by "doneState"
    const setDoneFilterStatus = (status: boolean) => {
        setenableDoneFiler(status)
    }

    // set filter for task list
    const setFilterForTaskList = (filterName: string) => {
        // niminal 2 letters must be typed in
        if (filterName.length < 2) {
            setTaskListFilter("")
        } else {
            setTaskListFilter(filterName)
        }
    }

    // set a sort criteria for the task list
    const setSortCriteria = (sortCriteria: string) => {

    }

    return (
        <div className="content">
            <TaskInput onAddTask={addTask} onFilterChange={setDoneFilterStatus} onInputFieldChange={setFilterForTaskList} />
            <TaskField taskInputCurr={taskListFilter} onSortByCriteria={setSortCriteria} filterShowAllStatus={enableDoneFiler} taskList={taskList} onDelete={deleteTask} onPrioChange={changePriority} onDoneStatusChange={setDoneStatus} />
        </div>
    );
}
