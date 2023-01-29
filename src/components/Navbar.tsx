import type { FunctionComponent } from "react";
import Link from "next/link";
import { AiFillTags } from "react-icons/ai";

const Navbar: FunctionComponent = () => {
	return (
		<div className="h-[60px] grid grid-cols-3 pr-[25px] pl-[25px]  " id="mission">
			<div className="flex items-center ">
				<AiFillTags className="text-3xl text-teal-500" />
				<h1 className="font-calsans text-3xl">
					Tag<span className="text-teal-500">Me</span>
				</h1>
			</div>

			<div className="flex justify-center items-center">
				<a className="font-calsans text-3xl " href="#mission">
					Our Mission
				</a>
				<a className="font-calsans text-3xl mx-[15px] " href="#about">
					About Us
				</a>
				<a className="font-calsans text-3xl " href="#contact">
					Contact
				</a>
			</div>

			<div className="flex justify-end items-center ">
				<span className="bg-gray-300 rounded-full hover:scale-105 ease-in-out">
					<button className="bg-gray-900 rounded-full text-white px-[30px] py-[5px] text-2xl font-sans font-bold translate-y-[-3px]">
						Get Started
					</button>
				</span>
			</div>
		</div>
	);
};

export default Navbar;
