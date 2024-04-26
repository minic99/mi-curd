# Abstract Repository

This is an abstract repository class for managing data using NeDB.

## Description

The Abstract Repository class provides basic CRUD (Create, Read, Update, Delete) functionality for managing data using NeDB, a lightweight embedded database. It is designed to be extended by specific repository classes for different types of data.

## Installation

```bash
npm install nedb-promises
```
## Usage

### Creating a Repository

To create a new repository, extend the Abstract Repository class and pass the database filename to the constructor:

```js
const AbstractRepository = require('./AbstractRepository');

class UserRepository extends AbstractRepository {
  constructor() {
    super('users.db');
  }
}

module.exports = UserRepository;

```
## Using the Repository

Once you have created a repository, you can use it to perform CRUD operations on your data:

```js
const userRepository = new UserRepository();

// Create a new user
const newUser = await userRepository.create({ name: 'John Doe', email: 'john@example.com' });

// Get all users
const allUsers = await userRepository.getAll();

// Get user by ID
const userById = await userRepository.getById(newUser._id);

// Update user
const updatedUser = await userRepository.update(newUser._id, { email: 'newemail@example.com' });

// Delete user
const deletedUser = await userRepository.delete(newUser._id);

```