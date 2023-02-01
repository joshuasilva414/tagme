import React from "react";
import { Prisma, FieldType, PrismaClient } from "@prisma/client";

type Props = {
  project: Prisma.ProjectGetPayload<{
    select: { [K in keyof Required<Prisma.ProjectSelect>]: true };
  }>;
};

const SingleTaskView = ({ project }: Props) => {
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
              <p className=" font-calsans text-3xl ">
                {project?.task?.description}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center py-[25px] px-[10px]">
            <div className="flex justify-center items-center bg-white">{}</div>
          </div>

          <div className="py-[25px] px[10px]">
            <p>
              {project.task?.fields.map(
                (taskField) =>
                  taskField.fieldType == FieldType.TEXT && <input type="text" />
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
  const { projectId } = context.params;
  const prisma = new PrismaClient();
  const project = await prisma.project.findUnique({ where: { id: projectId } });
  return { props: { project: JSON.parse(JSON.stringify(project)) } };
};

export default SingleTaskView;
