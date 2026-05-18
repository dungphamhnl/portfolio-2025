import mmusic from "../../../assets/portfolio/mmusic.svg";
import defiAnalytics from "../../../assets/portfolio/defi-analytics.svg";
import iotPlatform from "../../../assets/portfolio/iot-platform.svg";
import blockchainMarketplace from "../../../assets/portfolio/blockchain-marketplace.svg";
import homeServices from "../../../assets/portfolio/home-services.svg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "MMusic",
    slug: "mmusic",
    thumbnail: mmusic,
    description: "Music rights management SaaS",
  },
  {
    title: "DeFi Analytics",
    slug: "defi-analytics",
    thumbnail: defiAnalytics,
    description: "Trading and analytics dashboard",
  },
  {
    title: "IoT Platform",
    slug: "iot-platform",
    thumbnail: iotPlatform,
    description: "Realtime web and mobile system",
  },
  {
    title: "Blockchain Marketplace",
    slug: "blockchain-marketplace",
    thumbnail: blockchainMarketplace,
    description: "DeFi, NFT and GameFi interfaces",
  },
  {
    title: "Home Services",
    slug: "home-services",
    thumbnail: homeServices,
    description: "Mobile booking app for home-service operations",
  },
] as const satisfies ProjectPreview[];
