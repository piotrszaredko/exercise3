import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { NavigationService } from './navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        transform: 'translateX(calc(-100% / 170 * 70))'
      })),
      state('open', style({
        transform: 'translateX(0)'
      })),
      state('void', style({
        transform: 'translateX(calc(-100% / 170 * 70))'
      })),
      transition('void => *', animate('600ms 0.2ms ease-in-out')),
      transition('* <=> *', animate('600ms 0.2ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  title = 'uilove';
  isOpen: boolean = false;
  constructor(
    private _navigationService : NavigationService
  ) { 
    this._navigationService.menuStatus.subscribe( (response) => {
      this.isOpen = response;
    })
  }
}
