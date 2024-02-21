import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Get getHello' })
  @ApiResponse({ status: 200, description: 'getHello world.' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOperation({ summary: 'Get getName' })
  @ApiResponse({ status: 200, description: 'getName test.' })
  @Get('name')
  getName(): string {
    return this.appService.getName();
  }
}
