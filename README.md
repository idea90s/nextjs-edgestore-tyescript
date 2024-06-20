This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# add image store (edgeStore)
https://edgestore.dev/docs/quick-start

- [] create api/edgestore/[...edgestore]/route.ts
**************************************************************
import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";

const es = initEdgeStore.create();

const edgeStoreRouter = es.router({
  myPublicImages: es.imageBucket(),
});

const handler = createEdgeStoreNextHandler({
    router: edgeStoreRouter,
});

export {handler as GET, handler as POST};

export type EdgeStoreRouter = typeof edgeStoreRouter
**************************************************************


- [] create /lib/edge-store.ts
**************************************************************
"use client";

import { type EdgeStoreRouter } from "@/app/api/edgestore/[...edgestore]/route";
import { createEdgeStoreProvider } from "@edgestore/react";

export const { EdgeStoreProvider, useEdgeStore } =
  createEdgeStoreProvider<EdgeStoreRouter>();

**************************************************************
