# createController
# Person CRUD Controller

This is a NestJS project that contains a Person controller with Create, Read, Update, and Delete (CRUD) operations. This controller is responsible for managing persons and the data they contain.

## Installation

To install the project, simply clone the repository and install its dependencies with the following command:

```
npm install
```

## Running the project

To run the project, you can use the following command:

```
npm run start
```

Once you have started the project, you can open your browser and navigate to `http://localhost:3000/person` to see the results.

## Usage

To use the Person controller, you need to import it into your project, as follows:

```
import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('person')
export class PersonController { // ... }
```

You can then use the controller to perform the CRUD operations, as follows:

* Create person:

```
@Post()
async create(): Promise<any> {
  return 'Person ${data} created successfully!';
}
```

* Read person:

```
@Get(':id')
async get(@Param('id') id: string): Promise<any> {
  return `Person ${id} fetched successfully`;
}
```

* Update person:

```
@Put(':id')
async update(@Param('id') id: string): Promise<any> {
  return `Person ${id} update successfully`;
}
```

* Delete person:

```
@Delete(':id')
async delete(@Param('id') id: string): Promise<any> {
  return `Person ${id} deleted successfully`;
}
```

## Contributing

If you would like to contribute to the project, please fork the repository and submit a pull request.
