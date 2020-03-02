import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveToken(token) {
    // sacuvaj token pod nekim nazivom
  }

  getToken() {
    // dohvati token pod istim nazivom kao sto si ga sacuvao
  }

  clearStorage() {
    // Ocisti local storage
  }
}
