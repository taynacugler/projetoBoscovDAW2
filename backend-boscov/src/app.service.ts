import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  Descrição(): string {
    return 'Backend Boscov API';
  }
}
