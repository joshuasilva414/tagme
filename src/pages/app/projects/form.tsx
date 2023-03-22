import React from "react";
import { NextPage } from "next";
import { useState } from "react";

//  Form
function Form(props) {
  const [taskList, setTaskList] = useState([{ task: "" }]);

  const handleTaskAdd = () => {
    setTaskList([...taskList, { task: "" }]);
  };

  const handleTaskRemove = (index: number) => {
    const list = [...taskList];
    list.splice(index, 1);
    setTaskList(list);
  };

  return (
    <>
      <div>
        <div className="bg-white p-5">
          <h1 className="font-calsans text-3xl text-black">New Project Form</h1>
          <p className="mt-1 text-sm text-gray-600">
            Please fill out this form to create a new project.
          </p>
        </div>

        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="/api/projects" method="POST">
            {/* Form */}
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="flex items-start bg-teal-500 px-4 py-5 sm:p-6 h-screen">
                <div className="grid grid-cols-3 gap-6 w-1/5 rounded-lg bg-white p-5 shadow-lg">
                  {/* Project Name */}
                  <div className="cole-span-6 sm:col-span-3">
                    <label
                      htmlFor="Name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Project Name:
                    </label>
                    <input
                      type="text"
                      name="Project Name"
                      id="name"
                      autoComplete="given-name"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required={true}
                    />
                  </div>

                  {/* Description */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="Description"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Description:
                    </label>
                    <textarea
                      id="description"
                      name="Description"
                      rows={3}
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset-focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required={true}
                      defaultValue={""}
                    />
                  </div>

                  {/*  Tasks */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="TaskForm"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Tasks:
                    </label>
                    {taskList.map((singleTask, index) => (
                      <div key={index}>
                        <div>
                          <input
                            id="taskForm"
                            name="TaskForm"
                            type="text"
                            className="mt-2 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset-focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required={true}
                          />
                          <div className="flex align-middle">
                            {/* Shows another task when pressing the add button */}
                            {taskList.length - 1 == index &&
                              taskList.length < 5 && (
                                <div className="py-2 flex align-middle">
                                  <button
                                    type="button"
                                    className="whitespace- inline-block rounded bg-teal-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-teal-700 transition duration-150 ease-in-out hover:bg-teal-accent-100 focus:bg-teal-accent-100 focus:outline-non focus:ring-0 active:bg-teal-accent-200"
                                    onClick={handleTaskAdd}
                                  >
                                    add
                                  </button>
                                </div>
                              )}

                            {/* Removes a task form when pressing the remove button */}
                            <div className="remove-button flex align-middle">
                              {taskList.length > 1 && (
                                <button
                                  type="button"
                                  className="inline-block rounded px-2 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-teal-500 hover:text-teal-600 focus:text-teal-600 focus:outline-none focus:ring-0 active:text-teal-700"
                                  onClick={() => handleTaskRemove(index)}
                                >
                                  remove
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/*  Submit Button */}
                  <button
                    type="submit"
                    className="inline-block rounded bg-teal-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-teal-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-teal-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
