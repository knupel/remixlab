import { ProfilingIntegration } from "@sentry/profiling-node";
import * as Sentry from "@sentry/remix";
import { p as prisma } from "./server-build-dCut6Ov4.js";
import "react/jsx-runtime";
import "stream";
import "@remix-run/node";
import "@remix-run/react";
import "isbot";
import "react-dom/server";
import "zod";
import "react";
import "litefs-js";
import "@conform-to/react";
import "@conform-to/zod";
import "@epic-web/invariant";
import "remix-utils/honeypot/react";
import "clsx";
import "spin-delay";
import "tailwind-merge";
import "@radix-ui/react-label";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "@radix-ui/react-tooltip";
import "sonner";
import "@radix-ui/react-dropdown-menu";
import "bcryptjs";
import "remix-auth";
import "remix-utils/safe-redirect";
import "@paralleldrive/cuid2";
import "remix-auth-github";
import "fs";
import "@epic-web/cachified";
import "@epic-web/remember";
import "better-sqlite3";
import "lru-cache";
import "@prisma/client";
import "chalk";
import "@epic-web/client-hints";
import "@epic-web/client-hints/color-scheme";
import "@epic-web/client-hints/time-zone";
import "remix-utils/honeypot/server";
import "cookie";
import "@react-email/components";
import "@radix-ui/react-checkbox";
import "@epic-web/totp";
import "litefs-js/remix.js";
import "@nasa-gcn/remix-seo";
import "qrcode";
import "date-fns";
function init() {
  Sentry.init({
    dsn: ENV.SENTRY_DSN,
    environment: ENV.MODE,
    tracesSampleRate: ENV.MODE === "production" ? 1 : 0,
    denyUrls: [
      /\/resources\/healthcheck/,
      // TODO: be smarter about the public assets...
      /\/build\//,
      /\/favicons\//,
      /\/img\//,
      /\/fonts\//,
      /\/favicon.ico/,
      /\/site\.webmanifest/
    ],
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Sentry.Integrations.Prisma({ client: prisma }),
      new ProfilingIntegration()
    ],
    tracesSampler(samplingContext) {
      var _a, _b;
      if ((_b = (_a = samplingContext.request) == null ? void 0 : _a.url) == null ? void 0 : _b.includes("/resources/healthcheck")) {
        return 0;
      }
      return 1;
    },
    beforeSendTransaction(event) {
      var _a, _b;
      if (((_b = (_a = event.request) == null ? void 0 : _a.headers) == null ? void 0 : _b["x-healthcheck"]) === "true") {
        return null;
      }
      return event;
    }
  });
}
export {
  init
};
