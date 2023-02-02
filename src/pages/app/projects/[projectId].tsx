import React from "react";
import Link from "next/link";
import Dropdown from "@/components/inputs/Dropdown";
import { Prisma, FieldType, Field, PrismaClient } from "@prisma/client";
import backArrow from "public/img/backarrow.png";
import Image from "next/image";
import { InferGetServerSidePropsType } from "next";

type Props = {
  project: Prisma.ProjectGetPayload<{
    select: { [K in keyof Required<Prisma.ProjectSelect>]: true };
  }>;
};

const renderSwitch: (fieldInput: Field) => JSX.Element = (fieldInput) => {
  switch (fieldInput.fieldType) {
    case FieldType.SINGLE_CLASS:
      return <Dropdown options={fieldInput.options} />;
    case FieldType.MULTI_CLASS:
      return <Dropdown options={fieldInput.options} multiclass />;
    case FieldType.IMAGE:
      return <h1>Not Ready Yet</h1>;
    default:
      return <input type="text" />;
  }
};

const SingleTaskView = ({
      project,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <div className="flex items-center h-[10vh] p-[10px] border border-black ">
        <Link href="/app/dash">
          <Image src={backArrow} width={32} alt="back button" />
        </Link>
      </div>

      <div className="grid grid-cols-3 h-[80vh] bg-teal-500">
        {/* first section */}
        <div className=" p-[50px]">
          <div className="">
            <div className="flex-wrap flex-column items-center justify-center">
              <h1 className=" font-calsans text-7xl bold">{project?.name}</h1>
              <p className=" font-calsans text-3xl ">{project?.description}</p>
            </div>
          </div>
        </div>

        {/* middle section */}
        <div className="  p-[25px] bg-black object-fill">
          <div className=" h-[100%] flex justify-center items-center bg-white object-fill ">
            <h1>Example goes here</h1>
          </div>
        </div>

        {/* input section */}
        <div>
          <div className="flex justify-center items-center h-min bg-white border border-black object-fill">
            <h2>{project.task?.description}</h2>
          </div>
          <div className="flex justify-center items-center p-[25px] ">
            <div className="flex-col">
              <div>
                {project.task?.fields.map((taskField: Field) => (
                  <div>
                    <p>{taskField.prompt}</p>
                    {renderSwitch(taskField)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { projectId } = context.params;
  const prisma = Prisma.PrismaClientFetcher || new PrismaClient();
  const project = await prisma.project.findUnique({ where: { id: projectId } });
  return { props: { project: JSON.parse(JSON.stringify(project)) } };
};

export default SingleTaskView;
