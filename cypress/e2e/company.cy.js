describe("Companies Page", () => {
  beforeEach(() => {
    cy.visit("/companies");
  });

  it("should display the search bar", () => {
    cy.get(".search-bar input[type='text']")
      .should("exist")
      .and("have.attr", "placeholder", "Search companies or locations...");
  });

  it("should display all company cards initially", () => {
    cy.get(".card").should("have.length.at.least", 1);
  });

  it("should filter companies based on the search term (company name)", () => {
    const searchTerm = "Google";
    cy.get(".search-bar input").type(searchTerm);
    cy.get(".card").should("have.length", 1);
    cy.get(".card h3").should("contain.text", searchTerm);
  });

  it("should filter companies based on the search term (location)", () => {
    const location = "Bangalore";
    cy.get(".search-bar input").type(location);
    cy.get('[data-test="company-card"]').each(($card) => {
      cy.wrap($card).find("p").should("contain.text", location);
    });
  });

  it("should display 4 cards when i search beng", () => {
    cy.get(".search-bar input").type("beng");
    cy.get(".card").should("have.length", 4);
  });

  it("should display company details on each card", () => {
    cy.get(".card")
      .first()
      .within(() => {
        cy.get("img").should("have.attr", "src");
        cy.get("h3").should("exist");
        cy.get("p").should("exist");
        cy.get("a").should("have.length", 2);
      });
  });

  it("should navigate to external links (Visit Website & Careers) without errors", () => {
    cy.get(".card")
      .first()
      .within(() => {
        cy.get("a").eq(0).should("have.attr", "href").and("include", "http");
        cy.get("a").eq(1).should("have.attr", "href").and("include", "http");
      });
  });

  it("should clear search results when search term is cleared", () => {
    const searchTerm = "Google";
    cy.get(".search-bar input").type(searchTerm);
    cy.get(".card").should("have.length", 1);
    cy.get(".search-bar input").clear();
    cy.get(".card").should("have.length.at.least", 1);
  });
});
