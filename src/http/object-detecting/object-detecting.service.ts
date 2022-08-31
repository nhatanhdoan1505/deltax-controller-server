import { WebsocketGateway } from '../../websocket/websocket.gateway';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ObjectDetectingService {
  constructor(private websocket: WebsocketGateway) {}

  emitImage(image: string): void {
    this.websocket.emitImage(image);
  }
}
