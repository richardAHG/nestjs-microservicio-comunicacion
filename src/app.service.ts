import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user-event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  resolverCreaetUser(data: CreateUserEvent) {
    console.log('handleUserCreate - COMUNICACION', data);
  }
}
