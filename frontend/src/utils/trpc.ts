import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../../backend/src/routers/_app'
import { Router } from '@trpc/server/unstable-core-do-not-import';




export const trpc = createTRPCReact<Router<any, any>, AppRouter>();