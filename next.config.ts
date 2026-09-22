import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
    output: "standalone",
    /* config options here */
    typescript: {
          ignoreBuildErrors: true,
    },
    reactStrictMode: false,
    // Required so the Prisma client (and its D1 driver adapter) are bundled
    // as-is for the Cloudflare Workers (workerd) runtime instead of being
    // processed by webpack/turbopack, which breaks Prisma's generated client.
    serverExternalPackages: ["@prisma/client", ".prisma/client"],
};

// Enables local `next dev` to use real Cloudflare bindings (e.g. the D1
// database) via Miniflare, matching production. No-op outside of dev.
initOpenNextCloudflareForDev();

export default nextConfig;
