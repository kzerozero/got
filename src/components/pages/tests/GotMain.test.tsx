import { render, screen } from '@testing-library/react';
import GotMain from "../GotMain"

it("should display correct title/header", () => {
  render( <GotMain />);
  const gotTitle = screen.getByRole("heading", { name: "Game of Thrones"});
  expect(gotTitle).toBeInTheDocument();
});

it("should display a list of GOT characters", () => {
  render( <GotMain />);
  const characterList = screen.getByRole("list");
  expect(characterList).toBeInTheDocument();
  // TODO: validate list content 
});

it("should render characters with first name, last name, and image", 
  () => {
  render( <GotMain />);
});

it("should display details page when clicking on a character", () => {
  render( <GotMain />);
});
it("should filter characters based on user input", () => {
  render( <GotMain />);
});