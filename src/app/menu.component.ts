import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" [routerLink]="'home'">ngBootstrap</a>
        <button
          class="navbar-toggler"
          type="button"
          (click)="isMenuCollapsed = !isMenuCollapsed"
        >
          &#9776;
        </button>
        <div [ngbCollapse]="isMenuCollapsed" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item" routerLinkActive="active">
              <a
                class="nav-link"
                [routerLink]="'home'"
                (click)="isMenuCollapsed = true"
                >Home</a
              >
            </li>
            <li class="nav-item" routerLinkActive="active">
              <a
                class="nav-link"
                [routerLink]="'about'"
                (click)="isMenuCollapsed = true"
                >O stronie</a
              >
            </li>
            <li class="nav-item" routerLinkActive="active">
              <a
                class="nav-link"
                [routerLink]="'form'"
                (click)="isMenuCollapsed = true"
                >Kontakt</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class MenuComponent implements OnInit {
  constructor() {}
  public isMenuCollapsed = true;

  ngOnInit(): void {}
}
