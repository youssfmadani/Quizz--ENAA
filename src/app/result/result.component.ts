import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() finalResult: any;
  @Input() playerName!: string; 

  @Output() showMainMenuScreen = new EventEmitter();

  showMainMenu() {
    this.showMainMenuScreen.emit(true);
  }
}
