import React from 'react'
import {NextPage} from 'next';
import { useState } from 'react';

//  Form
function Form() {
  const [taskList, setTaskList] = useState([{task: "" }]);

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
            <div className="bg-teal-500 px-4 py-5 sm:p-6 h-screen">
              <div className="grid grid-cols-6 gap-6 rounded-lg bg-white p-5 shadow-lg">

                {/*  First Name */}
                <div className="cole-span-6 sm:col-span-3">
                  <label 
                    htmlFor="Name"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    First Name:
                  </label>
                  <input 
                    type="text"
                    name="First Name"
                    id="name"
                    autoComplete="given-name"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required={true}/>
                </div>

                {/*  Last Name */}
                <div className="col-span-6 sm:col-span-3">
                  <label 
                    htmlFor="Name"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    Last Name:
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="Last Name"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset-focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required={true} />
                </div>

                {/* Description */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Description"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    Description:
                  </label>
                  <textarea 
                    id="description"
                    name="Description"
                    rows={3}
                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset-focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required={true}
                    defaultValue={''}
                  />
                </div>

                {/*  Task Form */}
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="TaskForm">Task Form</label>
                  {taskList.map((singleTask,index) => (
                    <div>
                      <div>
                        <input
                          id="taskForm"
                          name="TaskForm"
                          type="text"
                          className="mt-2 block w-full rounded-md border-0 py-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset-focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <button>
                          
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/*  Submit Button */}
                <button type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
  )
    

  }

export default Form