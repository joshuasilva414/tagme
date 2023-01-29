import { type NextPage } from "next";
import Image from "next/image";

import Navbar from "@/components/Navbar";

const Home: NextPage = () => {
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div className="w-screen h-screen min-h-[750px] bg-teal-500 grid grid-cols-2 border-y-4 border-black">
				<div className="flex flex-col justify-center items-center ">
					<h1 className="font-calsans text-7xl text-shadow-light font-black tracking-wide ">
						Powering Data Science.
					</h1>
					<h1 className="font-calsans text-7xl text-shadow-light font-black tracking-wide">
						One <span className="text-white">Tag</span> At a Time.
					</h1>
				</div>
				<div className="flex items-center justify-center relative">
					<Image
						src={"/img/landing/heroPeople2.svg"}
						alt={"Data Science People"}
						className="scale-90"
						width={1000}
						height={1000}
					/>
				</div>
			</div>
			<div className="h-screen w-screen bg-slate-900" id="about">
				<h1 className="flex justify-center font-calsans text-7xl text-shadow-light text-teal-500 tracking-wide py-[25px]">
					What is TagMe?
				</h1>
				<div className="grid grid-cols-2 pl-[40px]">
					<div className="grid grid-rows-3">
						<div className="bg-white border rounded h-fit row-span-2">
							<p className="font-calsans text-4xl p-[30px]">
								TagMe is an online service that outsources data so that it can be labeled and be
								used to train tools like machine learning algorithms and social media recommendation
								systems. Anyone can make money by simply completing the tag tasks listed in the link
								below. You can also post your own tasks to create your own dataset!
							</p>
						</div>
						<div className="row-span-1">
							<button className="bg-teal-500 items-center rounded text-white px-[30px] py-[5px] text-2xl font-sans font-bold ">
								click here to start!
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="h-28 w-screen grid grid-cols-2 bg-slate-900" id="contact">
				<div></div>
				<div>
					<h1 className="text-white font-calsans text-2xl">contact: to be determined</h1>
				</div>
			</div>
		</>
	);
};

export default Home;
