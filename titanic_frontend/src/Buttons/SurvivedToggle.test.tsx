import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SurvivedToggle from "./SurvivedToggle";

describe("SurvivedToggle Component", () => {
  test("renders with the initial value", () => {
    render(<SurvivedToggle initialValue={0} onToggle={jest.fn()} />);
    const button = screen.getByRole("button", { name: "Did not survive" });
    expect(button).toHaveTextContent("Did not survive");
  });

  test("toggles from Did not survive to Survived", () => {
    const mockOnToggle = jest.fn();
    render(<SurvivedToggle initialValue={0} onToggle={mockOnToggle} />);

    const button = screen.getByRole("button", { name: "Did not survive" });
    fireEvent.click(button);

    expect(button).toHaveTextContent("Survived");
    expect(mockOnToggle).toHaveBeenCalledWith(1);
  });

  test("toggles from Survived to Did not survive", () => {
    const mockOnToggle = jest.fn();
    render(<SurvivedToggle initialValue={1} onToggle={mockOnToggle} />);

    const button = screen.getByRole("button", { name: "Survived" });
    fireEvent.click(button);

    expect(button).toHaveTextContent("Did not survive");
    expect(mockOnToggle).toHaveBeenCalledWith(0);
  });

  test("calls onToggle callback with the correct value", () => {
    const mockOnToggle = jest.fn();
    render(<SurvivedToggle initialValue={0} onToggle={mockOnToggle} />);

    const button = screen.getByRole("button", { name: "Did not survive" });
    fireEvent.click(button);
    expect(mockOnToggle).toHaveBeenCalledWith(1);

    fireEvent.click(button);
    expect(mockOnToggle).toHaveBeenCalledWith(0);
  });
});