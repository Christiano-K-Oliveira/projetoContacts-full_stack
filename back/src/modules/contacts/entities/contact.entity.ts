import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  name: string;
  email: string;
  telephone: string;
  readonly registration_date: string;
  client_id: string;

  constructor() {
    this.id = randomUUID();
    this.registration_date = Date();
  }
}
