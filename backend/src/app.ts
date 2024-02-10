
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { inferAsyncReturnType } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './routers/_app.js';
import sequelize from './config/connection.js';
import * as middlewares from './middlewares.js';
import MessageResponse from './interfaces/MessageResponse.js';



//Auth0
import { auth } from 'express-openid-connect';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

function getBaseUrl(){
  if(process.env.NODE_ENV === 'development'){
    return "http://localhost:3000"
  } return "http://localhost:3000"
}


//Auth Config
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: getBaseUrl(),
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
};

//Cloudinary duh
import {v2 as cloudinary} from 'cloudinary';
 
//Cloudinary Config
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_KEY, 
  api_secret: process.env.CLOUD_SECRET,
  secure: true
});


// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = inferAsyncReturnType<typeof createContext>;

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

export default app;
