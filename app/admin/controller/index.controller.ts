import { Controller, Get } from '@nestjs/common';

@Controller('admin/index')
export class IndexController {
  @Get('index')
  index(): string {
    return '6661';
  }
}
