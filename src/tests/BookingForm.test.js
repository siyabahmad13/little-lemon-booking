import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders booking form heading", () => {
  render(<BookingForm />);
  const heading = screen.getByText(/reserve a table/i);
  expect(heading).toBeInTheDocument();
});
