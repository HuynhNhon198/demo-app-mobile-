import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private storage: Storage
  ) { }

  async setStorage(key: string, data: any) {
    await this.storage.set(key, data);
  }

  async getStorage(key: string) {
    return await this.storage.get(key);
  }
}
