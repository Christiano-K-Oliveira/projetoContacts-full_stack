import { randomUUID } from 'node:crypto';

export class ContactEmail {
  readonly id: string;
  email: string;
  contact_id: string;

  constructor() {
    this.id = randomUUID();
  }
}
