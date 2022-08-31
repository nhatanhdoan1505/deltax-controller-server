import { Module } from '@nestjs/common';
import { TcpModule } from './tcp/tcp.module';
import { WebsocketModule } from './websocket/websocket.module';
import { HttpModule } from './http/http.module';

@Module({
  imports: [WebsocketModule, TcpModule, HttpModule],
})
export class AppModule {}
