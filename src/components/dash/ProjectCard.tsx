import { type FunctionComponent } from "react";
import Link from "next/link";

interface ProjectCardProps {
	name: string;
	examplesCount?: number;
	isActive?: boolean;
	projID: string;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
	name,
	examplesCount,
	isActive,
	projID,
}) => {
	return (
		<Link
			className={`w-full h-[75px] my-3 rounded-xl border-2 grid grid-cols-2 px-2 ${
				isActive ? "bg-green-200 border-green-300" : "bg-red-200 border-red-300"
			}`}
			href={`/app/projects/${projID}`}
		>
			<div className="flex items-center">
				<h1 className="text-black text-xl font-bold font-sans">{name}</h1>
			</div>
			<div className="flex items-center justify-end p-[10px]"></div>
		</Link>
	);
};

export default ProjectCard;
