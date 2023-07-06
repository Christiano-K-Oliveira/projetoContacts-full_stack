import { randomUUID } from 'node:crypto';

export class ClientEmail {
  readonly id: string;
  email: string;
  client_id: string;

  constructor() {
    this.id = randomUUID();
  }
}
