import { initTRPC } from "@trpc/server";

const t = initTRPC.create()

const appRouter = t.router({})

export type AppRouter = typeof appRouter