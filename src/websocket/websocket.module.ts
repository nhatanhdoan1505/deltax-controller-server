import { Module } from '@nestjs/common';
import { TcpModule } from './../tcp/tcp.module';
import { WebsocketGateway } from './websocket.gateway';

@Module({
  imports: [TcpModule],
  providers: [WebsocketGateway],
  exports: [WebsocketGateway],
})
export class WebsocketModule {}
