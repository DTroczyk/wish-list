import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  constructor() {}

  private generateTimeout(): number {
    let timeout = Math.random() * 5000;
    return timeout;
  }
}
