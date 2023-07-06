import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class Client {
  readonly id: string;
  name: string;
  email: string;

  @Exclude()
  password: string;

  telephone: string;
  readonly registration_date: string;

  constructor() {
    this.id = randomUUID();
    this.registration_date = Date();
  }
}
