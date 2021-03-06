import { Component } from '@angular/core';
import { Keg } from './model/tap-room.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bier Haus';
  masterBeerList: Keg[] = [
    new Keg("Na Zdravi Pils", "Southern Oregon", 4.8, 5),
    new Keg("Kolsch", "Occidental", 4.4, 5),
    new Keg("Sterling Pils", "Ninkasi", 5.1, 6),
    new Keg("Omission Lager", "Widmer Bros.", 4.6, 5),
    new Keg("River Ale", "Deschutes", 4, 5),
    new Keg("Chainbreaker White IPA", "Deschutes", 5.6, 6),
  ];
  selectedKeg = null;

  addKeg(newKeg: Keg) {
    this.masterBeerList.push(newKeg);
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
