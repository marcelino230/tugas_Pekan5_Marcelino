describe('Login', () => {
  const baseUrl = 'https://kasirdemo.belajarqa.com';

  it('Positive - Successful Login', () => {
    cy.visit(baseUrl);
    cy.get('input#email').type('abcd@gmail.com');
    cy.get('input#password').type('12345678');
    cy.get('button[type="submit"]').click();

    // Verifikasi pengalihan ke halaman dashboard
    cy.get('dd.chakra-stat__number.css-1axeus7').should('contain', 'hai');
  });

  it('Negative - Invalid Email', () => {
    cy.visit(baseUrl);
    cy.get('input#email').type('invalidemail');
    cy.get('input#password').type('12345678');
    cy.get('button[type="submit"]').click();

    // Verifikasi pesan kesalahan yang ditampilkan
    cy.get('div[role="alert"].chakra-alert').should('be.visible').contains('"email" must be a valid email');
  });

  it('Negative - Invalid Password', () => {
    cy.visit(baseUrl);
    cy.get('input#email').type('abcd@gmail.com');
    cy.get('input#password').type('1234567');
    cy.get('button[type="submit"]').click();

    // Verifikasi pesan kesalahan yang ditampilkan
    cy.get('div[role="alert"].chakra-alert').should('be.visible').contains('Kredensial yang Anda berikan salah');;
  });
});
