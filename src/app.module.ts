import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { featureModules } from './modules';
import { globalModules } from './modules/global';

@Module({
  imports: [ConfigModule.forRoot(), ...globalModules, ...featureModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
