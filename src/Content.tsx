import './Content.css'
import { useState } from 'react';
import { ITask } from './Task';
import { TaskInput } from './TaskInput'
import { TaskField } from './TaskField'


// start id for tesks
let taskIdCurr = 1;

export const Content = () => {

    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [enableDoneFiler, setenableDoneFiler] = useState<boolean>(false)


    // adds tasks into taskLis
    const addTask = (taskName: string): void => {
        const newTask = { id: (taskIdCurr++).toString(), name: taskName, priority: 0, doneStatus: false }
        setTaskList([...taskList, newTask]);
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

    const setDoneFilterStatus = (status: boolean) => {
        setenableDoneFiler(status)
    }



    return (
        <div className="content">
            <TaskInput onAddTask={addTask} onFilterChange={setDoneFilterStatus} />
            <TaskField filterShowAllStatus={enableDoneFiler} taskList={taskList} onDelete={deleteTask} onPrioChange={changePriority} onDoneStatusChange={setDoneStatus} />
        </div>
    );
}
