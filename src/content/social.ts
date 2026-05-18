export const social = [
  { url: "mailto:phamquocdungit98@gmail.com", name: "mail" },
  { url: "https://github.com/phamquocdungit98", name: "github" },
  { url: "https://www.linkedin.com/in/pham-quoc-dung/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
