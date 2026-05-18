import homeServices from "../../../assets/portfolio/home-services.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "Home Services",
  theme: "light",
  tags: ["reactnative", "react", "node", "postgresql"],
  videoBorder: true,
  description:
    "A mobile-first home-services platform inspired by real booking operations: users can browse service categories, place orders, track booking status, and review service quality.<br/><br/>The product focus was practical: clear booking flow, reliable status updates, maintainable mobile code, and backend APIs that support service, order, and customer workflows.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: homeServices,
        alt: "Home services mobile booking platform",
        caption: "React Native home-service booking and operations flow",
      },
    },
    {
      type: "list",
      props: {
        title: "Key work",
        size: "md",
        items: [
          "Built React Native screens for service discovery, booking flow, order detail, and customer interaction.",
          "Integrated REST APIs for service categories, order lifecycle, user profile, pricing, and booking status.",
          "Focused on mobile UX, clean state management, reusable components, and stable delivery for real customer workflows.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
