import { randomUUID } from 'node:crypto';

export class ContactTelephone {
  readonly id: string;
  number: string;
  contact_id: string;

  constructor() {
    this.id = randomUUID();
  }
}
