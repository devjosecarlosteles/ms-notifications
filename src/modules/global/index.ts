import { PrismaModule } from './prisma/prisma.module';
import { PubSubModule } from './pubsub/pubsub.module';

export const globalModules = [PrismaModule, PubSubModule];
