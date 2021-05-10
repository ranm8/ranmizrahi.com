import React from "react";
import { render } from "@testing-library/react";
import { BasicLink } from "./link.composition";

describe("link", () => {
  it("should render with the correct text", () => {
    const { getByText } = render(<BasicLink />);
    const rendered = getByText("About");
    expect(rendered).toBeTruthy();
    expect(rendered).toBeTruthy();
    expect(rendered).toBeTruthy();
  });
});