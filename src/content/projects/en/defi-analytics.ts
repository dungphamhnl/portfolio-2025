import defiAnalytics from "../../../assets/portfolio/defi-analytics.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "DeFi Analytics",
  theme: "light",
  tags: ["next", "react", "typescript", "graphql", "node"],
  videoBorder: true,
  description:
    "A DeFi analytics and trading platform with real-time price updates, portfolio screens, transaction history, and chart-heavy dashboards.<br/><br/>The main challenge was keeping data-heavy UI responsive while integrating frequent API updates and complex product logic.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: defiAnalytics,
        alt: "DeFi analytics interface",
        caption: "Realtime analytics and portfolio view",
      },
    },
    {
      type: "list",
      props: {
        title: "Key work",
        size: "md",
        items: [
          "Developed dashboard modules for price movement, transaction history, and portfolio views.",
          "Improved responsiveness through React Query caching, lazy loading, code splitting, and cleaner state handling.",
          "Worked closely with backend services and API layers to support business-critical product logic.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
