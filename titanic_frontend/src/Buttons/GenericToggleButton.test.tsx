import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./GenericToggleButton";

describe("GenericToggleButton Component", () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const mockOnChange = jest.fn();

  it("should render with the default option label", () => {
    render(
      <Toggle
        options={options}
        defaultValue="option1"
        onChange={mockOnChange}
      />
    );

    expect(screen.getByRole("button")).toHaveTextContent("Option 1");
  });

  it("should cycle through options when clicked", () => {
    render(
      <Toggle
        options={options}
        defaultValue="option1"
        onChange={mockOnChange}
      />
    );

    const button = screen.getByRole("button");

    // First click
    fireEvent.click(button);
    expect(button).toHaveTextContent("Option 2");
    expect(mockOnChange).toHaveBeenCalledWith("option2");

    // Second click
    fireEvent.click(button);
    expect(button).toHaveTextContent("Option 3");
    expect(mockOnChange).toHaveBeenCalledWith("option3");

    // Third click (back to the first option)
    fireEvent.click(button);
    expect(button).toHaveTextContent("Option 1");
    expect(mockOnChange).toHaveBeenCalledWith("option1");
  });

  it("should use the custom compare function if provided", () => {
    const customCompareFn = (a: string, b: string) => a.length === b.length;

    render(
      <Toggle
        options={options}
        defaultValue="option1"
        onChange={mockOnChange}
        compareFn={customCompareFn}
      />
    );

    const button = screen.getByRole("button");

    // First click 
    fireEvent.click(button);
    expect(button).toHaveTextContent("Option 1");
    expect(mockOnChange).toHaveBeenCalledWith("option2");

    // Second click
    fireEvent.click(button);
    expect(button).toHaveTextContent("Option 1");
    expect(mockOnChange).toHaveBeenCalledWith("option2");
  });

  it("should display 'Unknown' if no match is found", () => {
    render(
      <Toggle
        options={options}
        defaultValue="nonexistent"
        onChange={mockOnChange}
      />
    );

    expect(screen.getByRole("button")).toHaveTextContent("Unknown");
  });
});