import {
  GetServerSideProps,
  GetServerSidePropsContext,
  type NextPage,
} from "next";
import { Prisma, PrismaClient } from "@prisma/client";
import ProjectCard from "@/components/dash/ProjectCard";

type Props = {
  projects: Prisma.ProjectGetPayload<{
    select: { [K in keyof Required<Prisma.ProjectSelect>]: true };
  }>[];
};

const Dash: NextPage<Props> = ({ projects }: Props) => {
  return (
    <div className="bg-white h-screen">
      <div className="w-full max-w-[1200px] mx-auto pt-10 border-b-gray-200 border-b-2 grid grid-cols-2">
        <div className="flex items-center">
          <h1 className="font-calsans text-6xl text-black text-shadow-gray">
            Projects
          </h1>
        </div>
        <div className="flex justify-end">
          <button className="bg-slate-800 text-white m-2 rounded-full aspect-square ease-in-out hover:bg-slate-700 font-bold">
            +
          </button>
        </div>
      </div>
      <div className="min-h-screen grid-cols-3 mx-auto max-w-[1200px] pt-5">
        {projects.map((project) => (
          project.active && <ProjectCard
            key={project.id}
            name={project.name}
            projID={project.id}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const prisma = new PrismaClient();
  const projects = await prisma.project.findMany();
  console.dir(projects);
  return { props: { projects: JSON.parse(JSON.stringify(projects)) } };
};

export default Dash;
