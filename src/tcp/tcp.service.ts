import { Injectable, Logger } from '@nestjs/common';
import { Socket } from 'net';

@Injectable()
export class TcpService {
  private client = new Socket();
  private ip: string = '192.168.101.135';
  private port: number = 8844;
  isConnected: boolean;
  private logger = new Logger('TcpService');

  constructor() {
    this.connectApplication();
  }

  connectApplication() {
    this.client.connect(this.port, this.ip, () => {
      this.logger.log('Successfully connected');
      this.isConnected = true;
      this.client.write('ExternalScript-ImageProvider\n');
      this.client.setKeepAlive(true);
    });

    this.client.on('error', (err) => {
      this.isConnected = false;
      this.logger.error('Connection error:', err.message);
    });

    this.client.on('data', (data) => {
      this.logger.log(data.toString());
    });
  }

  emitApplication(data: string) {
    this.isConnected && this.client.write(data);
  }
}
