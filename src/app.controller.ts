import { Controller, Get, InternalServerErrorException } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('health')
  health() {
    return { status: 'ok',
      apiKeyLoaded: !!process.env.API_KEY,
     };
  }

  @Get('error')
  error() {
    throw new InternalServerErrorException('Fake error');
  }

  @Get()
  root() {
    return { message: 'API running' };
}

}