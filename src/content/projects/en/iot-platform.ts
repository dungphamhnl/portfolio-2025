import iotPlatform from "../../../assets/portfolio/iot-platform.svg";

import type { ProjectContent } from "../../types";

export default {
  title: "IoT Platform",
  theme: "dark",
  tags: ["react", "reactnative", "nestjs", "node", "mongodb", "redis", "websockets"],
  videoBorder: false,
  description:
    "A realtime IoT-connected education platform across web and mobile surfaces.<br/><br/>I built interfaces for live device status, chat, and user management while working with backend-driven state transitions and realtime communication.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: iotPlatform,
        alt: "IoT realtime platform",
        caption: "Realtime device status and education workflows",
      },
    },
    {
      type: "list",
      props: {
        title: "Key work",
        size: "md",
        items: [
          "Built realtime web and mobile interfaces with React, React Native, WebSocket, and MQTT-backed flows.",
          "Worked in a stack including NestJS, Node.js, Redis, and MongoDB.",
          "Handled async UI states, backend-driven updates, auth-related flows, and production debugging.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
