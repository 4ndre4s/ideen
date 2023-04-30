import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GptService } from './chat-gpt.service';

@Controller('chat')
export class AppController {
  constructor(private readonly appService: AppService) {}
  constructor(private readonly gptService: GptService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('question')
  createCompletion(): string {
    return this.gptService.createCompletion(question);
  }
}
