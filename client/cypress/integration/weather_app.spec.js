describe('Weather app', function() {


    beforeEach(function() {
        cy.visit('http://localhost:3000')
    })

    it('home page can be visited', function() {
        cy.contains("Avery's Weather App")
    })

    it('contains local weather data', function() {
        cy.contains('℉')
    })

    it('lets a user get data from a new city', function() {
        cy.get('input').type('detroit')
        cy.contains('Detroit, US')
    })

    it('shows a notifcation success message', function() {
        cy.get('input').type('berlin')
        cy.contains('Weather data for Berlin retrieved.')
    })

    it('doesnt let a user get data from a city that doesnt exist', function() {
        cy.get('input').type('asdfasdcsacd')
        cy.contains('The entered city name returned no result.')
    })

    it('doesnt try to fetch data when the input is emptied and data is available', function() {
        cy.get('input').type('ann arbor')
        cy.contains('Weather data for Ann Arbor retrieved.')
        cy.get('input').clear()
        cy.contains('Ann Arbor, US')
    })

    it('allows a user to see a 5 day forecast', function() {
        // some time cases allow 6 days to be included in the forecast
        cy.visit('http://localhost:3000/5day')
        cy.contains('5 day forecast for')
        cy.contains('5 day forecast for')
        cy.contains('00:00:00')
        cy.get('.forecast-list').children().its('length').should('be.gt', 4)
        cy.get('.forecast-list').children().its('length').should('be.lt', 7)
    })
})