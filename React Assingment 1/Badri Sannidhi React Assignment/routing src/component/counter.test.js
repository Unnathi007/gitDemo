import { render, fireEvent, screen } from "@testing-library/react";

import Counter from "../component/Counter";

test("increments counter", () => {
  render(<Counter />);

  const counter = screen.getByTestId("counter");

  const incrementBtn = screen.getByTestId("increment");

  fireEvent.click(incrementBtn);

  expect(counter).toHaveTextContent("1");
});
