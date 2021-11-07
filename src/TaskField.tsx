import { Task, ITask } from './Task';
import './TaskField.css'


interface Props {
    taskInputCurr: string
    filterShowAllStatus: boolean
    taskList: Array<ITask>
    onDelete(idToDelete: string): void
    onPrioChange(idToChange: string, newPriority: number): void
    onDoneStatusChange(idToChangeStatusDone: string, newDoneStatus: boolean): void
    onSortByCriteria(sortCriteria: string): void;
}

export const TaskField = ({ taskInputCurr, filterShowAllStatus, taskList, onDelete, onPrioChange, onDoneStatusChange, onSortByCriteria }: Props) => {

    // show tasklist accoring to set filter option
    const showTaskList = () => {
        let retVal = <div></div>


        // apply filtering for teskList accoring user input, always active
        let taskListInputFiltered
        taskListInputFiltered = taskList.filter(task => task.name.includes(taskInputCurr))

        // filter tasks according done status
        if (filterShowAllStatus) {
            taskListInputFiltered = taskListInputFiltered.filter(task => !task.doneStatus);
        }

        if (taskListInputFiltered.length === 0) {
            retVal = <div className="taskList noTasks">No similar tasks found</div>
        } else {
            retVal = (
                <div className="taskList">
                    {taskListInputFiltered.map((taskCurr: ITask, key: number) => (
                        <Task
                            key={key}
                            task={taskCurr}
                            onDelete={onDelete}
                            onPrioChange={onPrioChange}
                            onDoneStatusChange={onDoneStatusChange}
                        />
                    ))}
                </div>
            );
        }

        return retVal;
    }

    // show information that no tasks are available
    const showNoTaskInformation = () => {
        return (<div className="taskList noTasks"> No tasks available... </div>)
    }

    return taskList.length === 0 ? showNoTaskInformation() : showTaskList()
}
