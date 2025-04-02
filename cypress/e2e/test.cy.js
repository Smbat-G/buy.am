
describe('My new test', ()=>{
    it('Api tests', ()=>{
        cy.request('delete', '/undefined/supermarkets/carrefour/alcoholic-beverages/1').then((response) => {
            expect(response.status).to.eq(200)
        
            cy.request(get, '/undefined/supermarkets/carrefour/alcoholic-beverages').then((response) => {
                expect(response.status).to.eq(200)
            })
            
            cy.request(post, '/undefined/supermarkets/carrefour/alcoholic-beverages',{
                "name": "string",
                "price": 0
            }).then((response) => {
                expect(response.status).to.eq(201)
            })
            
            cy.request(put, '/supermarkets/carrefour/alcoholic-beverages/1',{
                "name": "newString",
                "price": 1
            }).then((response) => {
                expect(response.status).to.eq(200)
            })

            cy.intercept('delete', '/undefined/supermarkets/carrefour/alcoholic-beverages/1').as('delete')
            cy.request('delete', '/undefined/supermarkets/carrefour/alcoholic-beverages/1').then((response) => {
                expect(response.status).to.eq(200)
            })
    })
})

})
