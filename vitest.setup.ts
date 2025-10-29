import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

vi.mock("next/link", () => {
  const Link = ({ children, href, ...props }: any) =>
    React.createElement("a", { href: typeof href === "string" ? href : "", ...props }, children);
  Link.displayName = "NextLinkMock";
  return { default: Link };
});
