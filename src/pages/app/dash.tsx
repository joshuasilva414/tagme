import { type NextPage } from "next";
import { type ReactElement } from "react";
import ProjectCard from "@/components/dash/ProjectCard";

interface scaffold {
	name: string;
	examplesCount?: number;
	isActive?: boolean;
	id: sting;
}

const scaffold: scaffold[] = [
	{ name: "Dog Pictures", isActive: true, id: "bb676b66-35a3-49f7-b46a-656c49f66ecf" },
	{ name: "New Product Updates", isActive: true, id: "3fd66ba6-f7fa-4690-bedf-af0dfe345470" },
	{ name: "Video Analysis Assets", isActive: false, id: "f728eebe-88c5-4faf-8b7c-5b1ee19f210e" },
];

const Dash: NextPage = () => {
	return (
		<div className="bg-white h-screen">
			<div className="w-full max-w-[1200px] mx-auto pt-10 border-b-gray-200 border-b-2 grid grid-cols-2">
				<div className="flex items-center">
					<h1 className="font-calsans text-6xl text-black text-shadow-gray">Projects</h1>
				</div>
				<div className="flex justify-end">
					<button className="bg-slate-800 text-white m-2 rounded-full aspect-square ease-in-out hover:bg-slate-700">
						+
					</button>
				</div>
			</div>
			<div className="min-h-screen grid-cols-3 mx-auto max-w-[1200px] pt-5">
				{(() => {
					const els: ReactElement[] = [];
					for (const item of scaffold) {
						els.push(<ProjectCard name={item.name} isActive={item.isActive} projID={item.id} />);
					}
					return els;
				})()}
			</div>
		</div>
	);
};

export default Dash;
