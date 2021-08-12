import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World11!';
  }
  getHello1(): string {
    return 'Hello World56!';
  }
}
