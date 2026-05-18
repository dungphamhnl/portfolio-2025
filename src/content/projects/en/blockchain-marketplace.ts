import blockchainMarketplace from "../../../assets/portfolio/blockchain-marketplace.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Blockchain Marketplace",
  theme: "dark",
  tags: ["react", "next", "typescript", "nestjs", "mongodb", "elasticsearch"],
  videoBorder: false,
  description:
    "A collection of DeFi, NFT marketplace, and GameFi product interfaces with dashboards, auction flows, marketplace screens, and analytics views.<br/><br/>The work involved complex business rules, async states, realtime updates, and large-data UI performance.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: blockchainMarketplace,
        alt: "Blockchain marketplace system",
        caption: "Marketplace, portfolio, and analytics flows",
      },
    },
    {
      type: "list",
      props: {
        title: "Key work",
        size: "md",
        items: [
          "Built portfolio dashboards, marketplace screens, auction flows, and API-driven product modules.",
          "Worked with Elasticsearch-backed analytics and large datasets.",
          "Improved filtering, search experience, pagination, virtual scrolling, and frontend rendering performance.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
