import { randomUUID } from 'node:crypto';

export class ClientTelephone {
  readonly id: string;
  number: string;
  client_id: string;

  constructor() {
    this.id = randomUUID();
  }
}
