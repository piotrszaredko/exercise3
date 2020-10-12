import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/models/Notification';
import { AppService } from '../app.service';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {

  notifications: Notification[]

  constructor(
    private _navigationService: NavigationService,
    private _appService: AppService
  ) { }

  ngOnInit() {
    this._appService.notifications.subscribe((response) => {
      this.notifications = response
    })
  }

  collapseMenu(): void {
    this._navigationService.changeMenuStatus()
  }

  like(index: number, notification: Notification): void {
    console.log(1);
    this._appService.update(index, notification)
  }

  delete(index: number): void {
    this._appService.delete(index)
  }

}
