Cypress.Commands.add('getPetDetail', (petId) => {
    cy.request({
        method: 'GET',
        url: 'http://localhost:8080/api/v3/pet/' + petId,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('postPetDetail', (id, name, categoryId, categoryName, photoUrls, tagsId, tagsName, status) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8080/api/v3/pet',
        body: {
            "id": id,
            "name": name,
            "category": {
                "id": categoryId,
                "name": categoryName
            },
            "photoUrls": [
                photoUrls
            ],
            "tags": [
                {
                    "id": tagsId,
                    "name": tagsName
                }
            ],
            "status": status
        }
    }).then(response => {
        expect(response.status).to.equal(200)
    })
})


Cypress.Commands.add('deletePetDetail', petId => {
    cy.request({
        method: 'DELETE',
        url: 'http://localhost:8080/api/v3/pet/' + petId
    }).then(response => {
        expect(response.status).to.equal(200)
    })
})


Cypress.Commands.add('putPetDetail', (id, name, categoryId, categoryName, photoUrls, tagsId, tagsName, status) => {
    cy.request({
        method: 'PUT',
        url: 'http://localhost:8080/api/v3/pet',
        body: {
            "id": id,
            "name": name,
            "category": {
                "id": categoryId,
                "name": categoryName
            },
            "photoUrls": [
                photoUrls
            ],
            "tags": [
                {
                    "id": tagsId,
                    "name": tagsName
                }
            ],
            "status": status
        }
    }).then(response => {
        expect(response.status).to.equal(200)
    })
})


Cypress.Commands.add('createUser', (id, username, firstName, lastName, email, password, phone, userStatus) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8080/api/v3/user',
        body: {
            "id": id,
            "username": username,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "phone": phone,
            "userStatus": userStatus
        }
    }).then(response => {
        expect(response.status).to.equal(200)
    })
})

Cypress.Commands.add('getUserDetail', (username) => {
    cy.request({
        method: 'GET',
        url: 'http://localhost:8080/api/v3/user/' + username,
        failOnStatusCode: false
    })
})


Cypress.Commands.add('userLogin', (username, password) => {
    cy.request({
        method: 'GET',
        url: 'http://localhost:8080/api/v3/user/login?username=' + username + '&password=' + password
    }).then(response => {
        expect(response.status).to.equal(200)
    })
})

Cypress.Commands.add('updateUser', (username, id, updateusername, firstName, lastName, email, password, phone, userStatus) => {
    cy.request({
        method: 'PUT',
        url: 'http://localhost:8080/api/v3/user/' + username,
        body: {
            "id": id,
            "username": updateusername,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "phone": phone,
            "userStatus": userStatus
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add('deleteUser', (username) => {
    cy.request({
        method: 'DELETE',
        url: 'http://localhost:8080/api/v3/user/' + username,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('userLogout', () => {
    cy.request({
        method: 'GET',
        url: 'http://localhost:8080/api/v3/user/logout/'
    }).then(response => {
        expect(response.status).to.equal(200)
    })
})


Cypress.Commands.add('placeOrder', (id, petId, qty, shipDate, status, complete) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8080/api/v3/store/order',
        body: {
            "id": id,
            "petId": petId,
            "quantity": qty,
            "shipDate": shipDate,
            "status": status,
            "complete": complete
        },
        failOnStatusCode : false
    })
})

Cypress.Commands.add('getOrderDetail', (id) => {
    cy.request({
        method: 'GET',
        url: 'http://localhost:8080/api/v3/store/order/' + id,
        failOnStatusCode: false
    })
})


Cypress.Commands.add('deleteOrderDetail', (id) => {
    cy.request({
        method: 'DELETE',
        url: 'http://localhost:8080/api/v3/store/order/' + id,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('getInventoryDetail', () => {
    cy.request({
        method: 'GET',
        url: 'http://localhost:8080/api/v3/store/inventory/'
    })
})