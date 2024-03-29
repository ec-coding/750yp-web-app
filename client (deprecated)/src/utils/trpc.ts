import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '../../../backend/src/routers/_app'
import dotenv from 'dotenv'

dotenv.config();

function getBaseUrl() {
  if(process.env.NODE_ENV === 'production'){
    return '750yp.com'
  }
  return `http://localhost:5000`;
}

export const trpc = createTRPCNext<AppRouter>({
    config(opts) {
      return {
        links: [
          httpBatchLink({
            url: `${getBaseUrl()}/trpc`,
            async headers() {
              return {
                // authorization: getAuthCookie(),
              };
            },
          }),
        ],
      };
    },
    ssr: false,
  });
