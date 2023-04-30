import React from "react";
import Link from "next/link";
import Dropdown from "@/components/inputs/Dropdown";
import {
  Prisma,
  FieldType,
  Field,
  PrismaClient,
  Project,
} from "@prisma/client";
import backArrow from "public/img/backarrow.png";
import FieldCard from "@/components/FieldCard";
import { prisma } from "@/server/db";
import Image from "next/image";
import { InferGetServerSidePropsType } from "next";

type Props = {
  project: Project | null;
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
      <div className="flex items-center h-[10vh] p-[10px] border bg-teal-500 border-black ">
        <Link href="/app/dash">
          <Image src={backArrow} width={32} alt="back button" />
        </Link>
      </div>
      {project && (
        <div className="h-screen bg-gray-200 p-14 ">
          {/* Project info */}
          <div className="mb-14 max-w-prose">
            <div>
              <h1 className="text-5xl mb-2">{project.name}</h1>
              <h4 className="mb-4">
                Created at:{" "}
                {new Date(project.createdAt).toDateString() ?? "Unknown"}
              </h4>
            </div>
            <h3>{project.description}</h3>
          </div>

          {/* Tasks */}
          <div className="mb-14">
            <h1 className="text-3xl mb-5">Task</h1>
            <div className="max-w-prose">
              <h3>{project.task.description}</h3>
              <div className="border border-black rounded-md">
                {project.task.fields.map((idx: number, field: Field) => (
                  <FieldCard field={field} />
                ))}
              </div>
            </div>
          </div>

          {/* Dataset */}
          <div>
            <h1 className="text-3xl">Dataset</h1>
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { projectId } = context.params;
  const project = await prisma.project.findUnique({ where: { id: projectId } });
  return { props: { project: JSON.parse(JSON.stringify(project)) } };
};

export default SingleTaskView;
