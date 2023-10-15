import { router, publicProcedure } from '../trpc.js';
import sequelize from '../config/connection.js';
import Events from '../models/Event.js';
import { z } from 'zod';
import { randomUUID } from 'crypto';


export const eventRouter = router({
  getAll: publicProcedure.query((req) => {
    return Events.findAll();
  }),
  byId: publicProcedure.input(z.string()).query(req =>{
    return Events.findByPk(req.input);
  }),
  byName: publicProcedure.input(z.string()).query(req => {
    return Events.findOne({
      where: {
        name: req.input
      }
    });
  }),
  create: publicProcedure
    .input(z.object({ name: z.string(), description: z.string(), start_time: z.string(), end_time: z.string(), banner: z.string() }))
    .mutation(req => {
      const { name, description, start_time, end_time, banner } = req.input;
      const newEvent = { name, description, start_time, end_time, banner }
      Events.create(newEvent);
      return newEvent;
    }),
});
