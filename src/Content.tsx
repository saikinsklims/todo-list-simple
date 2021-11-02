import './Content.css'
import { ChangeEvent, ReactNode, useState } from 'react';
import { ITask, DisplayTask } from './Task';


// start id for tesks
let taskIdCurr = 1;

export const Content = () => {

    const [taskName, setTask] = useState<string>("");
    const [taskList, setTaskList] = useState<ITask[]>([]);
    // FIXME: implement method where filter will be enabled -_> callback to parent
    const [showAllChecked, setShowAllChecked] = useState<boolean>(false)
    

    // handle text changes
    const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if(event.target.name === "text") {
            setTask(event.target.value)
        }
    }

    // adds tasks into taskLis
    const addTask = (): void => {
        const newTask = {id: (taskIdCurr++).toString(), name: taskName, priority: 0, doneStatus: false}
        setTaskList([...taskList, newTask]);
        console.log(taskList)
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

    // displays tasks or text that no tasks are avaiable
    // TODO: change this to if blabla ? this : else this
    const displayTasks = () => {
        if (taskList.length === 0 ) {
            // display if no tasks are avaialble
            return(<div>No tasks available...</div>);
        } else {
            // display filtered list
            // FIXME: something is wrong... idk.            
            console.log(taskList.filter((taskCurr: ITask, key: number) => taskCurr.doneStatus === false))
            if (showAllChecked) {
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
            <div className="taskInput">
                <div className="textAndButton">
                    <input className="inputBox" placeholder="Type in your task ..." type="text" name="text" onChange={handleTextChange} value={taskName}/>
                    <input className="button" type="button" value="Add task" onClick={addTask} />
                </div>
                <div className="checkBox" defaultChecked={showAllChecked}>
                    <input type="checkbox" defaultChecked={!showAllChecked} onClick={() => setShowAllChecked(!showAllChecked)}/>
                    Show all
                    <div>{showAllChecked}</div>
                </div>
            </div>
            <div className="taskList">{displayTasks()}</div>
        </div>
    );
}