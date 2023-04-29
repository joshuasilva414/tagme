import React, {type FunctionComponent} from "react";
import {Field, Task} from "@prisma/client";

interface TaskFieldProps {
    index: number;
    task: Task;
    setTaskList:  React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskField: FunctionComponent<TaskFieldProps> = ({index, task, setTaskList}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskList((prevList) => {
            let newList = [...prevList];
            newList.splice(index, 1, {
                ...task,
                [e.target.name]: e.target.value
            });
            return newList;
        });
    };

    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        setTaskList((prevList) => {
            let newList = [...prevList];
            newList.splice(index, 1, {
                ...task,
                fields: (() => {
                    let newFields = [...task.fields];
                    newFields.splice(idx,
                        1,
                        {
                            ...(newFields[idx]),
                            [e.target.name]: e.target.value
                        });
                    return newFields;
                })()
            });
            return newList;
        });
    }

    return (
        <div>
            <input
                id="task-description"
                name="description"
                type="text"
                value={task.description}
                placeholder={"Find an image of a dog doing a handstand"}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset-focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required={true}
            />
            {/*{*/}
            {/*    task.fields.map((field: Field, idx: number) => (*/}
            {/*        <div>*/}
            {/*            <label className="text-xs" htmlFor={`field-${idx}-input`}>*/}
            {/*                Task Prompt:*/}
            {/*            </label>*/}
            {/*            <input*/}
            {/*                id={`field-${idx}-input`}*/}
            {/*                name="prompt"*/}
            {/*                type={"text"}*/}
            {/*                value={field.prompt}*/}
            {/*                onChange={(e) => handleFieldChange(e, idx)}*/}
            {/*                className={"mt-2 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset-focus:ring-indigo-600 sm:text-sm sm:leading-6"}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    );
}

export default TaskField;