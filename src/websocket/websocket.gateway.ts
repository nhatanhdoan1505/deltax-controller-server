import { Logger } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { TcpService } from './../tcp/tcp.service';
import { WebsocketEvent } from './dto/index.dto';

@WebSocketGateway(8000, {
  cors: {
    origin: '*',
  },
})
export class WebsocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private tcp: TcpService) {}

  private logger: Logger = new Logger('WebsocketGateway');

  handleDisconnect(client: Socket) {
    this.logger.warn(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ..._args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    this.server.emit('data', { a: 1, b: 2 });
  }

  afterInit(_server: Server) {
    this.logger.log('Initialized');
  }

  @WebSocketServer()
  server: Server;

  @SubscribeMessage(WebsocketEvent.PRESS)
  handleMessage(@MessageBody('data') data: string): void {
    this.tcp.emitApplication(data);
  }

  emitImage(image: string): void {
    this.server.emit(WebsocketEvent.IMAGE, image);
  }
}
