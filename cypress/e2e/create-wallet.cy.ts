describe("wallet creation and recovery", () => {
  // clear local storage once before testing
  before(() => {
    cy.restoreLocalStorage();
  });

  it("user can create wallet", () => {
    // start from root
    cy.visit("/dashboard");

    // open sidebar
    cy.findByRole("button", {
      name: /open sidebar/i,
    }).click();

    // click create new wallet button
    cy.findByRole("complementary")
      .findByRole("button", {
        name: /\+ create new wallet/i,
      })
      .click();

    // add a password
    cy.findByRole("textbox", {
      name: /wallet password/i,
    }).type("binanceIsCool");

    // click create wallet button
    cy.get("#root > section > form")
      .findByRole("button", {
        name: /create wallet/i,
      })
      .click();

    // wait max 30s and then check if wallet was encrypted Successfully
    cy.findByRole("textbox", {
      timeout: 30000,
      name: /secret recovery phrase/i,
    });
  });

  it("user can recover wallet", () => {
    // click link to go to wallet details page
    cy.findByRole("button", {
      name: /check new wallet/i,
    }).click();

    // click button to recover wallet
    cy.findByRole("button", {
      name: /reveal secret recovery phrase/i,
    }).click();

    // write down wallet password
    cy.findByRole("textbox", {
      name: /wallet password/i,
    }).type("binanceIsCool");

    // click button to decrypt wallet
    cy.findByRole("button", {
      name: /recover wallet/i,
    }).click();

    // wait max 30s and then check if wallet was decrypted Successfully
    cy.findByRole("textbox", {
      timeout: 30000,
      name: /secret recovery phrase/i,
    });
    cy.findByRole("textbox", {
      name: /wallet private key/i,
    });
  });
});
