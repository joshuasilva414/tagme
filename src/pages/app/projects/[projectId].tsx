import React from "react";
import Link from "next/link";
import Dropdown from "@/components/inputs/Dropdown";
import {
  Prisma,
  FieldType,
  Field,
  PrismaClient,
  Project, DataType,
} from "@prisma/client";
import backArrow from "public/img/backarrow.png";
import FieldCard from "@/components/FieldCard";
import { prisma } from "@/server/db/client";
import Image from "next/image";
import { InferGetServerSidePropsType } from "next";

type Props = {
  project: Project | null;
};

const SingleTaskView = ({
  project,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <div className="flex items-center h-[10vh] p-[10px] border bg-teal-500 border-black ">
        <Link href="/app/projects/index">
          <Image src={backArrow} width={32} alt="back button" />
        </Link>
      </div>
      {project && (
        <div className="h-screen bg-gray-200 p-14 ">
          {/* Project info */}
          <div className="mb-14">
            <div>
              <h1 className="text-5xl mb-2">{project.name}</h1>
              <h4 className="mb-4">
                Created at:{" "}
                {new Date(project.createdAt).toDateString() ?? "Unknown"}
              </h4>
              <h4>
                Owned by: Joshua Silva
              </h4>
            </div>
            <h3 className={"prose max-w-prose"}>{project.projectDescription}</h3>
          </div>

          {/* Tasks */}
          <div className="mb-14">
            <h1 className="text-3xl mb-5">Task</h1>
            <div>
              <h3 className={"prose max-w-prose"}>{project.taskDescription}</h3>
            </div>
          </div>

          {/* Dataset */}
          <div>
            <h1 className="text-3xl">Dataset</h1>
            <div>
              <h2>Input Type: {project.inputType}</h2>
              <h2>Output Type: {project.outputType}</h2>
            </div>
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
