import React from "react";
import { ITask } from "@/lib/schemas/task";
import { IProject } from "@/lib/schemas/project";
import { ITaskField } from "@/lib/schemas/task";
import { IExample } from "@/lib/schemas/example";

type Props = {
  project?: IProject;
  task?: ITask;
  error?: any;
};

const SingleTaskView = ({ project, task, error }: Props) => {
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="h-[60px]">
          <button className="">
            <img src="/img/backarrow.png" />
          </button>
        </div>

        <div className="grid grid-cols-3">
          <div className="">
            <div className="flex flex-column items-center justify-between">
              <h1 className=" font-calsans text-7xl bold">{project?.name}</h1>
              <p className=" font-calsans text-3xl ">{project?.description}</p>
            </div>
          </div>
          <div className="flex justify-center items-center py-[25px] px-[10px]">
            <div className="flex justify-center items-center bg-white">{}</div>
          </div>

          <div className="py-[25px] px[10px]">
            <p>
              {task?.taskFields.map(
                (taskField) =>
                  taskField.fieldType == "String" && <input type="text" />
              )}
            </p>
            <input type="text"></input>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const res = await fetch(
    `https://localhost:3000/projects/${context.params.projectId}`
  )
    .then((res) => {
      const project = res.json();
      return {
        props: {
          project,
        },
      };
    })
    .catch((e) => {
      console.log(e.message);
      return {
        error: e,                                                                                                                    
      };
    });
};

export default SingleTaskView;
