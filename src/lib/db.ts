import { getCloudflareContext } from "@opennextjs/cloudflare";
import { cache } from "react";
import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

// Cloudflare D1 is accessed through the Worker's `env` bindings rather than
// a connection string, so the Prisma client has to be created per-request
// (via the `DB` binding declared in wrangler.jsonc) instead of as a single
// module-level singleton like a traditional Postgres/MySQL setup.

// For dynamic (SSR) usage, e.g. inside a Route Handler.
export const getDb = cache(() => {
    const { env } = getCloudflareContext();
    const adapter = new PrismaD1(env.DB);
    return new PrismaClient({ adapter });
});

// For static/ISR usage where bindings must be awaited.
export const getDbAsync = async () => {
    const { env } = await getCloudflareContext({ async: true });
    const adapter = new PrismaD1(env.DB);
    return new PrismaClient({ adapter });
};
