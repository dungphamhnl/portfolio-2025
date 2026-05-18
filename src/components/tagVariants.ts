export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "typescript"
  | "nestjs"
  | "golang"
  | "next"
  | "graphql"
  | "docker"
  | "ai"
  | "reactnative"
  | "mongodb"
  | "elasticsearch"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  typescript: "TypeScript",
  nestjs: "NestJS",
  golang: "Golang",
  next: "Next.js",
  graphql: "GraphQL",
  docker: "Docker",
  ai: "AI",
  reactnative: "React Native",
  mongodb: "MongoDB",
  elasticsearch: "Elasticsearch",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
} as const satisfies Record<TagVariant, string>;
