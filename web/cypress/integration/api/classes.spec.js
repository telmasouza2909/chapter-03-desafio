/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

let Chance = require('chance');
let chance = new Chance();

context('Classes endpoint', () => {
    it('POST - Cadastrar novo professor', () => {


        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name": `${chance.first() && chance.last()}`,
                "avatar": "https://pickaface.net/gallery/avatar/44947415_161203_0634_2om7fql.png",
                "whatsapp": chance.phone({ formatted: false }),
                "bio": chance.word({ length: 20 }),
                "subject": "Matematica",
                "cost": 190,
                "schedule": [
                    {
                        "week_day": "1",
                        "from": "10:00",
                        "to": "11:00"
                    }
                ]
            }
        }).then((response) => {
            //asserções da resposta
            expect(response.status).to.eq(201)
            expect(response.duration).lessThan(100)
        });
    });
});
