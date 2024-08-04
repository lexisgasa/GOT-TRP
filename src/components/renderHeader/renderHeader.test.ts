import { renderHeader } from "./renderHeader";

describe("Given the header component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Game of Thrones' inside a heading", () => {
      const screen = document.createElement("div");

      const header = renderHeader();

      screen.appendChild(header);

      const appTitle = screen.querySelector("h1");

      expect(appTitle).not.toBeNull();
      expect(appTitle?.textContent).toBe("Game of Thrones");
    });
  });
});
