import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GenderToggle from "./GenderToggle";

describe("GenderToggle Component", () => {
  test("renders with the initial value", () => {
    render(<GenderToggle initialValue="male" onToggle={jest.fn()} />);
    const button = screen.getByRole("button", {name: "male"});
    expect(button).toHaveTextContent("male");
  });

  test("toggles from male to female", () => {
    const mockOnToggle = jest.fn();
    render(<GenderToggle initialValue="male" onToggle={mockOnToggle} />);

    const button = screen.getByRole("button", { name: "male" });
    fireEvent.click(button);

    expect(button).toHaveTextContent("female");
    expect(mockOnToggle).toHaveBeenCalledWith("female");
  });

  test("toggles from female to male", () => {
    const mockOnToggle = jest.fn();
    render(<GenderToggle initialValue="female" onToggle={mockOnToggle} />);

    const button = screen.getByRole("button", { name: "female" });
    fireEvent.click(button);

    expect(button).toHaveTextContent("male");
    expect(mockOnToggle).toHaveBeenCalledWith("male");
  });

  test("calls onToggle callback with the correct value", () => {
    const mockOnToggle = jest.fn();
    render(<GenderToggle initialValue="male" onToggle={mockOnToggle} />);

    const button = screen.getByRole("button", { name: "male" });
    fireEvent.click(button);
    expect(mockOnToggle).toHaveBeenCalledWith("female");

    fireEvent.click(button);
    expect(mockOnToggle).toHaveBeenCalledWith("male");
  });
});