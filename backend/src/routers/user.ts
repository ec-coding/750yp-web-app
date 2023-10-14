import { router, publicProcedure } from '../trpc.js';
import Users from '../models/User.js';
import { z } from 'zod';

export const userRouter = router({
  getAll: publicProcedure.query(() => {
    return Users.findAll();
  }),
  byId: publicProcedure
    .input(z.number())
    .query((opts) => {
      return Users.findByPk(opts.input);
    }),
  byEmail: publicProcedure.input(z.string()).query((opts) => {
    return Users.findOne({ where: { email: opts.input } });
  }),
  create: publicProcedure
    .input(z.object({ email: z.string(), name: z.string(), profile_icon: z.string()}))
    .mutation((opts) => {
      const { email, name, profile_icon } = opts.input;
      const newUser = { email, name, profile_icon };
      Users.create(newUser);
      return Users.findOne({where: {email: email}});
    }),
});
