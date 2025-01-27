describe("Navbar Component", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1024, 768);
  });

  it("should render all navbar elements correctly", () => {
    cy.get("nav.navbar")
      .find("img.logo")
      .should("be.visible")
      .and("have.attr", "src", "https://www.linkpicture.com/q/HL.png");

    cy.get("nav.navbar .links").within(() => {
      cy.get("a")
        .first()
        .should("have.attr", "href", "https://github.com/bobbyy16/Hyper-List");

      cy.contains("a", "Home").should("have.attr", "href", "/");
      cy.contains("a", "Companies").should("have.attr", "href", "/companies");
      cy.contains("a", "Docs")
        .should("have.attr", "href", "/docs")
        .and("have.class", "navbar-docs");
    });

    cy.get(".menu-icon").should("exist");
  });

  it("should toggle mobile menu correctly", () => {
    cy.viewport(375, 667);

    cy.get(".menu-icon").click();
    cy.get(".links").should("have.class", "active");
    cy.get("nav.navbar").should("have.class", "open");

    cy.get(".menu-icon").click();
    cy.get(".links").should("not.have.class", "active");
    cy.get("nav.navbar").should("not.have.class", "open");
  });

  it("should navigate to correct pages when clicking links", () => {
    cy.viewport(375, 667);

    cy.get(".menu-icon").click();
    cy.get(".links").should("have.class", "active");

    cy.contains("a", "Home").click({ force: true });
    cy.url().should("eq", Cypress.config().baseUrl + "/");

    cy.get(".menu-icon").click();
    cy.contains("a", "Companies").click({ force: true });
    cy.url().should("include", "/companies");

    cy.get(".menu-icon").click();
    cy.contains("a", "Docs").click({ force: true });
    cy.url().should("include", "/docs");
  });

  it("should have correct GitHub link attributes", () => {
    cy.get(".links a")
      .first()
      .should("have.attr", "href", "https://github.com/bobbyy16/Hyper-List");
  });

  it("should close mobile menu when a link is clicked", () => {
    cy.viewport(375, 667);

    cy.get(".menu-icon").click();
    cy.get(".links").should("have.class", "active");

    cy.contains("a", "Companies").click({ force: true });
    cy.get(".links").should("not.have.class", "active");
  });
});
