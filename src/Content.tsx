import './Content.css'
import { ChangeEvent, ReactNode, useState } from 'react';
import { ITask, DisplayTask } from './Task';


export const Content = () => {

    const [taskName, setTask] = useState<string>("");
    const [todoList, setTodoList] = useState<ITask[]>([]);
    const [showAllChecked, setShowAllChecked] = useState<boolean>(false);

    // handle text changes
    const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if(event.target.name === "text") {
            setTask(event.target.value)
        }
    }

    // adds tasks into todoList
    const addTask = (): void => {
        const newTask = {name: taskName, priority: 0, doneStatus: false}
        setTodoList([...todoList, newTask]);
        console.log(todoList)
        setTask("");
    }

    // delete task (filter by name)
    const deleteTask = ( nameToDelete: string ):void => {    
        setTodoList(todoList.filter( (task) => {return task.name !== nameToDelete} ) )
    }

    // displays tasks or text that no tasks are avaiable
    const displayTasks = () => {

        console.log(showAllChecked);
        let tasks : ReactNode;
        if (todoList.length === 0 ) {
            // display if no tasks are avaialble
            return(<div>No tasks available...</div>);
        } else {
            // display filtered list
            // FIXME: something is wrong... idk.            
            console.log(todoList.filter((taskCurr: ITask, key: number) => taskCurr.doneStatus === false))
            if (showAllChecked) {
                return(<div>
                        {todoList.filter((taskCurr: ITask, key: number) => taskCurr.doneStatus === false).map(filteredTask => (
                            <DisplayTask task={filteredTask} deleteTask={deleteTask} />
                            ))}
                        </div>)
                
            } else {
                return(
                    <div>
                        {todoList.map((taskCurr: ITask, key: number) => (
                            <DisplayTask task={taskCurr} deleteTask={deleteTask} />
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
                    <input className="inputBox" type="text" name="text" onChange={handleTextChange} value={taskName}/>
                    <input className="button" type="button" value="Add task" onClick={addTask} />
                </div>
                <div className="checkBox" defaultChecked={showAllChecked}>
                    <input type="checkbox" defaultChecked={!showAllChecked} onClick={() => setShowAllChecked(!showAllChecked)}/>
                    Show all
                    <div>{showAllChecked}</div>
                </div>
            </div>
            <div className="todolist">{displayTasks()}</div>
        </div>
    );
}