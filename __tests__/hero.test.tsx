import React from "react";
import { render, screen } from "@testing-library/react";

import { Hero } from "@/components/Hero";

describe("Hero", () => {
  it("renders the primary headline", () => {
    render(<Hero />);
    expect(
      screen.getByText(
        /Orchestrating intelligent, secure and resilient digital ecosystems for the enterprise/i
      )
    ).toBeInTheDocument();
  });

  it("provides calls to action", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /schedule a strategy session/i })).toBeVisible();
    expect(screen.getByRole("link", { name: /explore services/i })).toBeVisible();
  });
});
