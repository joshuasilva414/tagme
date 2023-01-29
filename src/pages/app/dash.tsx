import {
  GetServerSideProps,
  GetServerSidePropsContext,
  type NextPage,
} from "next";
import { useEffect, type ReactElement } from "react";
import ProjectCard from "@/components/dash/ProjectCard";

// type Props = {
//   projects?: any;
// };

const Dash: NextPage = () => {
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
        <ProjectCard
          name={"English Sentiment Analysis Dataset"}
          active
          projID="63d695e83912d87d8a8329e9"
        />
      </div>
    </div>
  );
};

// export const getServerSideProps = async (context: any) => {
//   let req = await fetch("http://localhost:3000/api/projects/", {
//     method: "POST",
//   })
//     .then((res) => {
//       return { props: { projects: res.json } };
//     })
//     .catch((err) => {
//       console.log(err.message);
//       return { error: err };
//     });
//   return ;
// };

// export const getServerSideProps = async (context: any) => {
//   const res = await fetch("http://localhost:3000/projects/");
//   console.log("res: ", res);
//   return {
//     props: {
//       projects: res.json(),
//     },
//   };
// };

export default Dash;
