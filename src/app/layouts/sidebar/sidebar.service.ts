import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private isSidebarOpened = false;

  get isOpened() {
    return this.isSidebarOpened;
  }

  toggle() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }
}
