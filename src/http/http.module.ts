import { Module } from '@nestjs/common';
import { ObjectDetectingModule } from './object-detecting/object-detecting.module';

@Module({ imports: [ObjectDetectingModule] })
export class HttpModule {}
