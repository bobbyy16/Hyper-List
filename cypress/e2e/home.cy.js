describe("HomePage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the homepage title and subtitle", () => {
    cy.get(".hero-title").should("contain.text", "Find Companies in India");
    cy.get(".hero-subtitle").should(
      "contain.text",
      "Explore the comprehensive database of companies across various regions in India on our website, connecting you to the diverse business landscape of the nation."
    );
  });

  it("should have a button that links to /companies", () => {
    cy.get(".orange-button").should("have.attr", "href", "/companies");
  });

  it('should display the "Why Should We Use This?" section with correct content', () => {
    cy.get(".why-should-we-do-this")
      .first()
      .within(() => {
        cy.get(".title").should("contain.text", "Why Should We Use This?");
        cy.get(".description").should(
          "contain.text",
          "It offers a comprehensive and user-friendly platform to explore companies in India."
        );
        cy.get(".benefits-list").should("exist");
        cy.get(".benefit-item").should("have.length", 4); // Check if there are 4 benefits listed
      });
  });

  it('should display the "Dear Contributors" section with correct content', () => {
    cy.get(".content-contributors")
      .should("exist")
      .within(() => {
        cy.get(".title").should("contain.text", "Dear Contributors");
        cy.get(".description").should(
          "contain.text",
          "We know that open source projects rely on the contributions of many people, and we are grateful for your willingness to give your time and skills to this project."
        );
        cy.get(".btn-orange").should(
          "have.attr",
          "href",
          "https://github.com/bobbyy16/Hyper-List/blob/main/CONTRIBUTOR.md"
        );
      });
  });

  it('should display images for both "Why Should We Use This?" and "Dear Contributors" sections', () => {
    cy.get(".why-should-we-do-this .company-image").should("have.length", 3); // Target images within sections
  });

  it("should have a footer component", () => {
    cy.get("footer").should("exist");
  });
});
