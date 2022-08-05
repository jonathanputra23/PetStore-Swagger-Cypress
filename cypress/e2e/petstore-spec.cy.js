/// <reference types="cypress" />

describe('PET-APP-TEST', () => {

    // Get pet details
    it('GET PET DETAILS', () => {
    cy.getPetDetail(2)
    })

    // Create new pet details and check if pet successfully added
    it('CREATE NEW PET DETAIL', () => {
    cy.postPetDetail(112, "james", 1, "Dogs", "string", 0, "string", "available")
    cy.getPetDetail(112).then(response => {
        expect(response.body.name).to.equal("james")
        expect(response.status).to.equal(200)
    })
    })

    // Update pet details and check if updated response matches with request body
    it('UPDATE PET DETAIL', () => {
        cy.putPetDetail(112, "andri", 1, "Cats", "string", 0, "string", "available")
        
        cy.getPetDetail(112).then(response => {
            expect(response.body.name).to.equal("andri")
            expect(response.body.category.name).to.equal("Cats")
            expect(response.status).to.equal(200)
        })
        })

    // Delete selected pet details and check if selected pet details successfully deleted
    it('DELETE PET DETAIL', () => {
        cy.deletePetDetail(112)
        cy.getPetDetail(112).then(response => {
            expect(response.status).to.equal(404)
        })
    })
})


describe('USER-APP-TEST', () => {
    // Check if there are user name jamesriady77 if there is none return 404 status code,
    // then create user jamesriady77 and check again.
    it('CREATE NEW USER', () => {
    cy.getUserDetail("jamesriady77").then(response => {
        expect(response.status).to.equal(404)
    })
    cy.createUser(93, "jamesriady77", "riady", "james", "jameslucky77@gmail.com", "chocolate", "+628273819233", 1)
    cy.getUserDetail("jamesriady77").then(response => {
        expect(response.status).to.equal(200)
    })
    })

    // Update user info while logged in from jamesriady77 to jamesriady78.
    it('UPDATE AND DELETE USER WHILE LOGGED IN', () => {
        cy.userLogin("jamesriady77", "chocolate")

        cy.updateUser("jamesriady77", 93, "jamesriady78", "riady", "james", "jameslucky77@gmail.com", "chocolate", "+628273819233", 1).then(response => {
            expect(response.status).to.equal(200)
        })
        cy.getUserDetail("jamesriady77").then(response => {
            expect(response.status).to.equal(404)
        })
        cy.userLogout()
    })

    // Update user info without logged in should return 404 status code.
    it('UPDATE USER WITHOUT LOGGED IN', () => {
        cy.updateUser("jamesriady77", 93, "jamesriady78", "riady", "james", "jameslucky77@gmail.com", "chocolate", "+628273819233", 1).then(response => {
            expect(response.status).to.equal(404)
        })
    })

    // Delete user info without logged in should return 404 status code.
    it('DELETE USER WITHOUT LOGGED IN', () => {
        cy.deleteUser("jamesriady77").then(response => {
            expect(response.status).to.equal(404)
        })
    })
    
    // Create user, login, and delete user info while logged in.
    it('DELETE USER WHILE LOGGED IN', () => {
        cy.createUser(93, "jamesriady77", "riady", "james", "jameslucky77@gmail.com", "chocolate", "+628273819233", 1)
        cy.userLogin("jamesriady77", "chocolate")
        cy.deleteUser("jamesriady77").then(response => {
            expect(response.status).to.equal(200)
        })
    })

})

describe('STORE-APP-TEST', () => {
    let approved, placed, delivered
    // Get order detail by orderID
    it('GET PURCHASE ORDER DETAILS', () => {
        cy.getOrderDetail(4).then(response => {
            expect(response.status).to.equal(200)
        })
    })

    // Delete purchase order details and check the orderid and should return 404
    it('DELETE PURCHASE ORDER DETAILS', () => {
        cy.deleteOrderDetail(3).then(response => {
            expect(response.status).to.equal(200)
        })
        cy.getOrderDetail(3).then(response => {
            expect(response.status).to.equal(404)
        })
    })

    // Place a new order by orderId
    it('PLACE AN ORDER', () => {
        cy.getOrderDetail(154).then(response => {
            expect(response.status).to.equal(404)
        })
        cy.placeOrder(154, 198772, 7, "2022-08-05T21:17:16.860Z", "placed", true).then(response => {
            expect(response.status).to.equal(200)
        })
        
        cy.getOrderDetail(154).then(response => {
            expect(response.body.quantity).to.equal(7)
            expect(response.status).to.equal(200)
        })
        })
    
    // Calculate inventory count before and after an order been placed
    it('GET STORE INVENTORY DETAILS', () => {
        cy.getInventoryDetail().then(response => {
            approved = response.body.approved
        })
        cy.placeOrder(154, 198772, 7, "2022-08-05T21:17:16.860Z", "approved", true).then(response => {
            expect(response.status).to.equal(200)
        })
        cy.getInventoryDetail().then(response => {
            expect(response.body.approved).to.equal(approved)
        })
    })
})