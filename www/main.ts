import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
// const path = require('path')
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /*
   * 3.1.2 设置虚拟路径2
   * 注：需要引入import { join } from 'path';
   * 访问连接：http://localhost:3000/static/2.jpg
   */
  app.useStaticAssets(join(__dirname, '..', 'static'), {
    prefix: '/static/',
  });

  /* 配置模板引擎，不用引入直接配置 */
  app.setBaseViewsDir('templates');
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();
