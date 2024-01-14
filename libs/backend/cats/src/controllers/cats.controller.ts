import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll() {

    // return some json obnject
    return {
      cats: [
        {
          name: 'Cat 1',
        },
        {
          name: 'Cat 2',
        },
      ],
    };
  }
}