import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '@/server/routers/_app';
import {prisma} from "@/server/db/client";

// export API handler
// @see https://trpc.io/docs/server/adapters
export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => ({prisma: prisma}),
});