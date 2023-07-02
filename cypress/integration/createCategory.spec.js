
describe('Create Category', () => {

    const baseUrl = 'https://kasirdemo.belajarqa.com';

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.get('input#email').type('abcd@gmail.com');
        cy.get('input#password').type('12345678');
        cy.get('button[type="submit"]').click();
    });
  
    it('Positive - should create a new category successfully', () => {

      cy.get('div.css-1mqa38q').contains('kategori').click();
  
      cy.get('a.chakra-button.css-1piskbq').contains('tambah').click();
  
      cy.get('input#nama').type('Test Category');
  
      cy.get('input#deskripsi').type('Test Category Description');
  
      cy.get('button.chakra-button.css-l5lnz6').contains('simpan').click();
  
      cy.get('div.chakra-alert__title').contains('success');
    });

    it('Negative - should display error message when "nama" field is empty', () => {

        cy.get('div.css-1mqa38q').contains('kategori').click();
    
        cy.get('a.chakra-button.css-1piskbq').contains('tambah').click();
    
        cy.get('input#nama').clear();
    
        cy.get('input#deskripsi').type('Test Product Description');
    
        cy.get('button.chakra-button.css-l5lnz6').contains('simpan').click();
    
        cy.get('div.chakra-alert').contains('"name" is not allowed to be empty');
      });

  });
  