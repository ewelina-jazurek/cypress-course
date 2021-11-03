
/// <reference types="Cypress" />

describe("JSON Object", () => {
    it("JSON Object Examples", () => {

        const exampleObject = { "key": "Tim", "key2": "Jones" }
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]
        const exampleArrayOfObjects = [
            { "key": "Luke" },
            { "key2": "Smith" },
            { "key3": "worker" }
        ]

        const users = {
            "firstName": "Joe",
            "lastName": "Blogs",
            "age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs2",
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker",
                }
            ]
        }

        cy.log(exampleObject["key"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.key);

        cy.log(exampleArrayOfValues[0])
        cy.log(exampleArrayOfValues[1])

        cy.log(users.Students[0].lastName)
        cy.log(exampleArrayOfObjects[0].key)
        cy.log(exampleArrayOfObjects[1].key2)
        cy.log(exampleArrayOfObjects[2].key3)

    });

})

