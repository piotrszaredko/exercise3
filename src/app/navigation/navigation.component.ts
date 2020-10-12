import { Component, OnInit } from '@angular/core';
import { menu } from 'src/mockups/Menu';
import { MenuItem } from 'src/models/MenuItem';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menu: MenuItem[] = menu;
  constructor(
    private _navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  collapseMenu(): void {
    this._navigationService.changeMenuStatus()
  }

}
