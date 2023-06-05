import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('person')
export class PersonController {
  @Post()
  async create(): Promise<any> {
    return 'Person ${data} created successfully!';
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<any> {
    return `Person ${id} fetched successfully`;
  }

  @Put(':id')
  async update(@Param('id') id: string): Promise<any> {
    return `Person ${id} update successfully`;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return `Person ${id} deleted successfully`;
  }
}
