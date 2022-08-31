import { ObjectDetectingService } from './object-detecting.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('/object-detecting')
export class ObjectDetectingController {
  constructor(private objectDetectingService: ObjectDetectingService) {}
  @Get('/')
  home(): string {
    return 'Hello world';
  }
  @Post('/image')
  getImage(@Body('image') image: string): string {
    this.objectDetectingService.emitImage(image);
    return image;
  }
}
