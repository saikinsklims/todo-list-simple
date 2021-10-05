import { ChangeEvent, useState } from 'react';
import './Content.css'
import { ITask, DisplayTask } from './Task';






export const Content = () => {

    const [taskName, setTask] = useState<string>("");
    const [todoList, setTodoList] = useState<ITask[]>([]);


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
        
    }





    
    return(

        <div className="content"> 
            <div className="taskInput">
                <div className="textAndButton">
                    <input className="inputBox" type="text" name="text" onChange={handleTextChange} value={taskName}/>
                    <input className="button" type="button" value="Add task" onClick={addTask} />
                </div>
                <div className="checkBox">
                    <input type="checkbox" value="Show all"/>
                    Select all
                </div>
            </div>


            <div className="infoText" >
                Infotext
            </div>

            <div className="todoList">
                Tasklist
                {todoList.map( (taskCurr: ITask, key: number) => {
                    return <DisplayTask task={taskCurr} />
                })}

            </div>


        </div>
    );
}