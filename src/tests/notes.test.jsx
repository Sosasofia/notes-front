import { screen } from "@testing-library/react";
import { expect, test } from "vitest";
// We're using our own custom render function and not RTL's render.
import { BrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Note from "../features/notes/Note";

import { renderWithProviders } from "./test-utils";

test("should render landing page", () => {
  renderWithProviders(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );

  expect(screen.getByText("Notes App"));
});

test("should render a note", () => {
  const note = {
    title: "Title content test",
    content: "Content test"
  };
  renderWithProviders(
    <BrowserRouter>
      <Note note={note} />
    </BrowserRouter>
  );

  expect(screen.getAllByText("Title content test")).toBeDefined();
});
