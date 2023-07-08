import {
	GetServerSideProps,
	GetServerSidePropsContext,
	NextPageContext,
	type NextPage,
	InferGetServerSidePropsType,
} from "next";

import Link from "next/link";
import { Project } from "@prisma/client";
import ProjectCard from "@/components/dash/ProjectCard";
import {UserButton} from "@clerk/nextjs";
import {trpc} from "@/utils/trpc";
// type Props = {
// 	projects: Prisma.ProjectGetPayload<{
// 		select: { [K in keyof Required<Prisma.ProjectSelect>]: true };
// 	}>[];
// };

// export const getInitialProps = (ctx: NextPageContext) => {
//     return
// }
const Index: NextPage = () => {
	const {data: projects, isLoading} = trpc.projects.getAll.useQuery();

	return (
		<div className="bg-white h-screen">
			<div className="flex w-full justify-end p-2">
				<UserButton afterSignOutUrl="/"/>
			</div>
			<div className="w-full max-w-[1200px] mx-auto pt-10 border-b-gray-200 border-b-2 grid grid-cols-2">
				<div className="flex items-center">
					<h1 className="font-calsans text-6xl text-black text-shadow-gray">
						Projects
					</h1>
				</div>
				<div className="flex justify-end">
					<button className="bg-slate-800 text-white m-2 rounded-full aspect-square ease-in-out hover:bg-slate-700 font-bold">
						<Link href="/app/projects/new">+</Link>
					</button>
				</div>
			</div>
			<div className="min-h-screen grid-cols-3 mx-auto max-w-[1200px] pt-5">
				{projects ? projects.map(
					(project: Project) =>
						project.isActive && (
							<ProjectCard
								key={project.id}
								name={project.name}
								projID={project.id}
							></ProjectCard>
						)
				) : isLoading ? (
					<div>Loading...</div>
				) : (
					<div>Error :\</div>
				)}
			</div>
		</div>
	);
};

// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const projects = await prisma.project.findMany();
//   //console.dir(projects);
//   return { props: { projects: JSON.parse(JSON.stringify(projects)) } };
// };

export default Index;
