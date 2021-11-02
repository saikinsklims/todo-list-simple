import './Content.css'
import { ChangeEvent, useState } from 'react';
import { ITask, DisplayTask } from './Task';
import { TaskInput } from './TaskInput'


// start id for tesks
let taskIdCurr = 1;

export const Content = () => {

    const [task, setTask] = useState<string>("");
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [enableDoneFiler, setenableDoneFiler] = useState<boolean>(false)
    

    // adds tasks into taskLis
    const addTask = (taskName : string): void => {
        const newTask = {id: (taskIdCurr++).toString(), name: taskName, priority: 0, doneStatus: false}
        setTaskList([...taskList, newTask]);
        setTask("");
    }

    // delete task (filter by name)
    const deleteTask = ( idToDelete: string ):void => {    
        setTaskList(taskList.filter( (task) => {return task.id !== idToDelete} ) )
    }

    // changes priority of task
    const changePriority = (idToChange: string, newPriority: number):void => {
        const newTasksList = taskList.map( task => {
            if (task.id === idToChange) {
                return { ...task, priority: newPriority}
            }
            return task
        });
        setTaskList(newTasksList);
    }

    // changes task status to done or not
    const setDoneStatus = (idToChangeStatusDone: string, newDoneStatus: boolean):void => {
        const newTasksList = taskList.map( task => {
            if (task.id === idToChangeStatusDone) {
                return { ...task, doneStatus: newDoneStatus}
            }
            return task
        });
        setTaskList(newTasksList);
    }

    const setDoneFilterStatus = (status : boolean) => {    
        setenableDoneFiler(status)
    }

    // displays tasks or text that no tasks are avaiable
    // TODO: change this to if blabla ? this : else this
    const displayTasks = () => {
        if (taskList.length === 0 ) {
            // display if no tasks are avaialble
            return(<div>No tasks available...</div>);
        } else {
            // display filtered list
            if (enableDoneFiler) {
                return(
                    <div>
                        {taskList.filter((taskCurr: ITask, key: number) => taskCurr.doneStatus === false).map(filteredTask => (
                            <DisplayTask task={filteredTask} deleteTask={deleteTask} changePriority={changePriority} setDoneStatus={setDoneStatus} />
                        ))}
                    </div>)
            } else {
                return(
                    <div>
                        {taskList.map((taskCurr: ITask, key: number) => (
                            <DisplayTask task={taskCurr} deleteTask={deleteTask} changePriority={changePriority} setDoneStatus={setDoneStatus} />
                        ))}
                    </div>
                );
            }
        }
    }
    
    return(
        <div className="content"> 
            <TaskInput addTask={addTask} setDoneFilterStatus={setDoneFilterStatus}/>     
            <div className="taskList">{displayTasks()}</div>
        </div>
    );
}