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

  // Napravi novi repozitorijum
  // stavi mu gitignore za angular
  // stavi mu readme da ima inicijalno (prazan ce biti verovatno)
  // i kopiraj sve iz ovog foldera tamo
  
}
