import {router, procedure} from "@/server/trpc";
import {z} from "zod";

export const projectRouter = router({
    getAll: procedure.query(async ({ctx}) => {
        const projects = await ctx.prisma.project.findMany({});
        console.dir(JSON.stringify(projects));
        return JSON.parse(JSON.stringify(projects));
    }),
});