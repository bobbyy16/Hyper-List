describe("Docs Page", () => {
  beforeEach(() => {
    // Navigate to the Docs page
    cy.visit("/docs");
  });

  it("should render the Navbar and Footer", () => {
    cy.get("nav").should("exist"); // Assuming the Navbar contains a <nav> tag
    cy.get("footer").should("exist"); // Assuming the Footer contains a <footer> tag
  });

  it("should display the main documentation header", () => {
    cy.get(".documentation-container h1.code")
      .should("contain.text", "Documentation:")
      .and("be.visible");
  });

  it("should list all getting started steps", () => {
    cy.get(".documentation-container ol")
      .first()
      .within(() => {
        cy.get("li").should("have.length", 6);
        cy.get("li").eq(0).should("contain.text", "Star the repository");
        cy.get("li").eq(1).should("contain.text", "Install pnpm globally");
        cy.get("li")
          .eq(2)
          .should("contain.text", "Clone the project repository");
        cy.get("li")
          .eq(3)
          .should("contain.text", "Change into the project directory");
        cy.get("li")
          .eq(4)
          .should("contain.text", "Install project dependencies");
        cy.get("li").eq(5).should("contain.text", "Start the project locally");
      });
  });

  it("should display usage examples", () => {
    cy.get(".documentation-container h2.code")
      .contains("Usage")
      .should("be.visible");
    cy.get(".documentation-container ul").within(() => {
      cy.get("li").should("have.length", 2);
      cy.get("li")
        .eq(0)
        .should("contain.text", "Allows users to look for different companies");
      cy.get("li")
        .eq(1)
        .should(
          "contain.text",
          "Allows users to find some open-source projects"
        );
    });
  });

  it("should display contributing section", () => {
    cy.get(".documentation-container h2.code")
      .contains("Contributing")
      .should("be.visible");

    // Verify contributing guidelines steps
    cy.get(".documentation-container ol")
      .last()
      .within(() => {
        cy.get("li").should("have.length", 7);
        cy.get("li").eq(0).should("contain.text", "Star the repository");
        cy.get("li")
          .eq(1)
          .should("contain.text", "Fork the project repository");
        cy.get("li").eq(2).should("contain.text", "Create a new branch");
        cy.get("li").eq(3).should("contain.text", "To add Companies use");
        cy.get("li")
          .eq(4)
          .should("contain.text", "If the company has multiple locations,");
        cy.get("li")
          .eq(5)
          .should("contain.text", "Make your changes and commit them");
        cy.get("li").eq(6).should("contain.text", "Submit a pull request");
      });

    // Verify the company addition example
    cy.get(".documentation-container code")
      .contains('"company_name" : "company_name"')
      .should("be.visible");
    cy.get(".documentation-container code")
      .contains('"category": "companies"')
      .should("be.visible");
  });

  it("should include all the correct code snippets", () => {
    cy.get(".documentation-container code").should("exist").and("be.visible");
    cy.get(".documentation-container code")
      .contains("npm install -g pnpm")
      .should("be.visible");
    cy.get(".documentation-container code")
      .contains("git clone git@github.com")
      .should("be.visible");
    cy.get(".documentation-container code")
      .contains("pnpm install")
      .should("be.visible");
    cy.get(".documentation-container code")
      .contains("pnpm run dev")
      .should("be.visible");
    cy.get(".documentation-container code")
      .contains("git commit -m")
      .should("be.visible");
  });
});
