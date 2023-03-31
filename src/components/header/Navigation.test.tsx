import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter} from "react-router-dom";
import Navigation from "./Navigation"; 

it("renders link to main page", () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const mainPageLink = screen.getByRole("link", {name: "home"});
  expect(mainPageLink).toBeInTheDocument();
});