import { Task, ITask } from './Task';
import './TaskField.css'


interface Props {
    filterShowAllStatus: boolean;
    taskList: Array<ITask>;
    onDelete(idToDelete: string): void;
    onPrioChange(idToChange: string, newPriority: number): void;
    onDoneStatusChange(idToChangeStatusDone: string, newDoneStatus: boolean): void;
}


export const TaskField = ({ filterShowAllStatus, taskList, onDelete, onPrioChange, onDoneStatusChange }: Props) => {

    // show tasklist accoring to set filter option
    const showTaskList = () => {
        if (filterShowAllStatus) {
            return (
                <div className="taskList">
                    {taskList.filter((taskCurr: ITask) =>
                        taskCurr.doneStatus === false).map((filteredTask: ITask, key: number) => (
                            <Task
                                key={key}
                                task={filteredTask}
                                onDelete={onDelete}
                                onPrioChange={onPrioChange}
                                onDoneStatusChange={onDoneStatusChange}
                            />
                        ))}
                </div>
            );
        } else {
            return (
                <div className="taskList">
                    {taskList.map((taskCurr: ITask, key: number) => (
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
    }

    // show information that no tasks are available
    const showNoTaskInformation = () => {
        return (<div className="taskList noTasks"> No tasks available... </div>);
    }

    return taskList.length === 0 ? showNoTaskInformation() : showTaskList();
}
