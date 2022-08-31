import { ObjectDetectingService } from './object-detecting.service';
import { WebsocketModule } from './../../websocket/websocket.module';
import { Module } from '@nestjs/common';
import { ObjectDetectingController } from './object-detecting.controller';

@Module({
  imports: [WebsocketModule],
  controllers: [ObjectDetectingController],
  providers: [ObjectDetectingService],
})
export class ObjectDetectingModule {}
