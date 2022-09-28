describe("wallet import and recovery", () => {
  // clear local storage once before testing
  before(() => {
    cy.restoreLocalStorage();
  });

  it("user can import wallet", () => {
    // start from root
    cy.visit("/dashboard");

    // open sidebar
    cy.findByRole("button", {
      name: /open sidebar/i,
    }).click();

    // click import wallet button
    cy.findByRole("complementary")
      .findByRole("button", {
        name: /\+ import wallet/i,
      })
      .click();

    // add a password
    cy.findByRole("textbox", {
      name: /wallet password/i,
    }).type("binanceIsCool");

    // add recovery phrase
    cy.findByRole("textbox", {
      name: /secret recovery phrase \(mnemonic\)/i,
    }).type(
      "twist isolate budget update shoot luxury mistake visa vehicle learn panic assume"
    );

    // click import wallet button
    cy.get("#root > section > form")
      .findByRole("button", {
        name: /import wallet/i,
      })
      .click();

    // wait until secret recovery phrase textbox get out of the view
    cy.wait(1000);

    // wait max 30s and then check if wallet was decrypted Successfully
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
