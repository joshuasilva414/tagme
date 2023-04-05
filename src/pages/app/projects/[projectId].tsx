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

      <div className="grid grid-cols-2 h-[90vh] bg-teal-500 ">
        {/* first section */}
        <div className=" m-[50px] mb-[0px] p-[50px] overflow-y-scroll bg-teal-900 h-[150vh]">
          <div className="">
            <div className="flex-wrap flex-column items-center justify-center">
              <h1 className=" font-calsans text-7xl bold py-[50px]">{project?.name}</h1>
              <p className=" font-calsans text-3xl ">{project?.description}</p>
            </div>
          </div>
        </div>

        {/* input section */}
        <div className=" flex flex-col  items-center bg-black p-[5vh] border-black rounded h-[90vh] w-[50vw]">
          <div className="flex justify-center items-center h-min bg-white border border-black object-fill h-[15vh] rounded-lg w-[40vw]">
            <h2>{project.task?.description}</h2>
          </div>
          <div className="h-[80vh] flex justify-center items-center p-[25px] bg-black text-3xl">
            <button className="p-[25px] bg-white border rounded drop-shadow-[0px_0px_20px_rgba(255,255,255,1)] ">start</button>
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
  await prisma.$disconnect();
  return { props: { project: JSON.parse(JSON.stringify(project)) } };
};

export default SingleTaskView;
