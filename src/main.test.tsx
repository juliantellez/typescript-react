describe("Example Test", () => {
  it("should mount example node", () => {
    const container = document.createElement("div");
    container.id = "main";

    document.body.appendChild(container);
    require("./main.tsx");

    const value = document.querySelector('[aria-label="example"]').innerHTML;
    const expected = "Hello World!";

    expect(value).toEqual(expected);
  });
});
