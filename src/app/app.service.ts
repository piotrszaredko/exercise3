import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Notification } from '../models/Notification';
import { notifications } from '../mockups/Notifications';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _notifications = new BehaviorSubject<Notification[]>(notifications)
  public readonly notifications: Observable<Notification[]> = this._notifications.asObservable()
  
  constructor() { }

  update(index: number, notification: Notification): void {
    this._notifications[index] = notification
  }

  delete(index: number): void {
    const arr = [...this._notifications.getValue()]
    arr.splice(index, 1)
    this._notifications.next(arr)
  }
}
