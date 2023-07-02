
describe('Create Customer', () => {

    const baseUrl = 'https://kasirdemo.belajarqa.com';

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.get('input#email').type('abcd@gmail.com');
        cy.get('input#password').type('12345678');
        cy.get('button[type="submit"]').click();
    });
  
    it('Positive - should create a new customer successfully', () => {

        cy.get('div.css-1mqa38q').contains('pelanggan').click();

        cy.get('a.chakra-button.css-1piskbq').contains('tambah').click();

        cy.get('input#nama').type('Test User');
        cy.get('input[data="no.hp,,function () { [native code] }"]').type('081327523204');
        cy.get('input#alamat').type('Test Alamat User');
        cy.get('input#keterangan').type('Test Keterangan User');

        cy.get('button.chakra-button.css-l5lnz6').contains('simpan').click();

        cy.get('div[role="alert"]').contains('item ditambahkan');
    });

    it('Negative - should show an error when entering invalid data type on phone number field', () => {
        cy.get('div.css-1mqa38q').contains('pelanggan').click();
    
        cy.get('a.chakra-button.css-1piskbq').contains('tambah').click();
    
        cy.get('input#nama').type('Test User');
        cy.get('input[data="no.hp,,function () { [native code] }"]').type('abcdefghijklmn');
        cy.get('input#alamat').type('Test Alamat User');
        cy.get('input#keterangan').type('Test Keterangan User');
    
        cy.get('button.chakra-button.css-l5lnz6').contains('simpan').click();
    
        cy.get('div[role="alert"]').contains('"phone" must be a number');
      });

  });
  