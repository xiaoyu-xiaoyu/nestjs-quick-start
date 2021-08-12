import { Controller, Get, Render } from '@nestjs/common';

@Controller('admin/user')
export class UserController {
  @Get('info')
  // 2.配置ejs文件路径
  @Render('admin/user/info')
  info() {
    return { username: '1', password: '123' };
  }
}
