import mmusic from "../../../assets/portfolio/mmusic.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "MMusic",
  theme: "dark",
  tags: ["next", "react", "typescript", "graphql", "websockets", "postgresql", "docker", "ai"],
  videoBorder: false,
  description:
    "A music rights management SaaS platform with an admin dashboard, partner portal, and financial reporting modules.<br/><br/>I worked across requirement clarification, frontend architecture, API integration, production support, and performance-sensitive reporting flows in a microservice-based environment.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: mmusic,
        alt: "MMusic reporting dashboard",
        caption: "Partner reporting and rights management",
      },
    },
    {
      type: "list",
      props: {
        title: "Key work",
        size: "md",
        items: [
          "Built dashboard, partner portal, and financial reporting flows with Next.js, React, TypeScript, GraphQL, and WebSocket.",
          "Collaborated with backend engineers on data contracts, service-to-service flows, and reporting logic.",
          "Used Docker-based local environments and AI-assisted workflows with Cursor, Claude Code, and Antigravity while manually reviewing production logic.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
