# Cypress Swagger Petstore Testing

## Overview
This is the pet store sample you can download this on https://github.com/swagger-api/swagger-petstore.

### To run (with Maven)
To run the server, run this task:

```
mvn package jetty:run
```

This will start Jetty embedded on port 8080.

### To run Cypress
You need to download Cypress first and install Cypress on your computer.
After that, open Cypress and add projects on the Petstore project file path.
Then configure cypress (in this case, cypress already configured) and start E2E Testing.

Then choose your prefered browser, in my case I used Chrome and it will automatically opens up chrome browser for us to run the Cypress test.

After that, click on the petstore-spec.cy.js and it will run the test for you automatically.
