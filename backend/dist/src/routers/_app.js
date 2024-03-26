import { router } from '../trpc.js';
import { userRouter } from './user.js';
import { eventRouter } from './event.js';
import { imageRouter } from './image.js';
export const appRouter = router({
    user: userRouter,
    event: eventRouter,
    image: imageRouter,
});
//# sourceMappingURL=_app.js.map