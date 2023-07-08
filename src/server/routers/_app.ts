import {projectRouter} from './projects';
import { router } from '../trpc';

export const appRouter = router({
    projects: projectRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;