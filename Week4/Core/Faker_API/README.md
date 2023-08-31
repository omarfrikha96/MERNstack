# Faker API assignment
In this assignment, we will be using 2 Javascript libraries to create a simple API that generates User and Company objects depending on the requested route. The libraries we will be using are Express for the server and Faker for the random data generation. The goal is to start broadening our understanding of APIs.

For this assignment, you are tasked with creating User and Company objects

User Object
password
email
phoneNumber
lastName
firstName
_id
Company Object
_id
name
address
street
city
state
zipCode
country

Faker
The faker library has a ton of methods we can use to populate specific fields with randomly generated data.

To add faker to your project you need to install it using npm.

Create a new project folder "Faker_API" and with your terminal, navigate into your new folder

Create a package.json file using the "npm init -y" command in your terminal

install express and faker

Create a server.js file

In your server.js file, Import express and faker

Create 2 functions: createUser, createCompany that return an object with the properties listed above

Create an api route "/api/users/new" that returns a new user

Create an api route "/api/companies/new" that returns a new company

Create an api route "/api/user/company" that returns both a new user and a new company

Run your server.js file using nodemon

Using Postman, test your new GET routes