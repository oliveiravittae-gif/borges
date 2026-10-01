// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { ConfigEnv } from "vite";

export default (env: ConfigEnv) => {
  const isPages = process.env["GITHUB_PAGES"] === "true";

  return defineConfig({
    // Keep Lovable's normal build; GitHub Pages only serves static files.
    ...(isPages
      ? {
          nitro: false,
          vite: {
            base: "/borges/",
            environments: {
              client: { build: { outDir: "dist" } },
              ssr: { build: { outDir: "dist-ssr" } },
            },
          },
        }
      : {}),
    tanstackStart: {
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      // nitro/vite builds from this
      server: { entry: "server" },
      ...(isPages
        ? {
            prerender: { enabled: true, failOnError: true, crawlLinks: false },
          }
        : {}),
    },
  })(env);
};
