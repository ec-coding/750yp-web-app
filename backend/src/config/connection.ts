import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import Users from '../models/User.js';
import Events from '../models/Event.js';
import Attendee from '../models/Attendee.js';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME! || 'railway',
  process.env.DB_USER! || 'root',
  process.env.DB_PASSWORD || '40DzYw3LRIfUjT0jg4Ox',
  {
    host: process.env.HOST || "containers-us-west-163.railway.app",
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true,
        // Set the SSL certificate options as needed
        rejectUnauthorized: false, // Set this to false if you're using a self-signed certificate
      },
      port: process.env.DB_PORT || 6104,
    },
    models: [Users, Events, Attendee]
  },
);

export default sequelize;
