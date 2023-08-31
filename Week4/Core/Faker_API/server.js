const express = require("express");

const { faker } = require('@faker-js/faker');

const app = express();
const port = 8000;

const createUser = ()=>{
    return(
          {
        password : faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber: faker.phone.number(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        _id : faker.string.uuid()
    }  
    )
}

const createCompany  = ()=>{
    return(
          {
         _id : faker.string.uuid(),
        name : faker.company.name(),
        address  : {
            street: faker.location.streetAddress(),
            city : faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.county()
        }
    }  
    )
}

// Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
  });
  
//   Create an api route "/api/companies/new" that returns a new company
  app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
  });

//   Create an api route "/api/user/company" that returns both a new user and a new company
  app.get("/api/user/company", (req, res) => {
    const newCompany = createCompany();
    const newUser = createUser();
    const obj = {
        user : newUser ,
        company : newCompany
    }
    res.json(obj);
  });


app.listen(port, () => {
    console.log(`express is on port ${port}`);
  });