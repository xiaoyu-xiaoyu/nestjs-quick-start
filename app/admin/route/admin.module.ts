import { Module } from '@nestjs/common';
import { IndexController } from '../controller/index.controller';
import { UserController } from '../controller/user.controller';

@Module({
  imports: [],
  controllers: [IndexController, UserController],
})
export class AdminModule {}
