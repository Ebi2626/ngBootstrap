import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  number = 2;

  @Input()
  img = {
    url: '',
    alt: `brak-zdjęcia ${this.number}`,
  };

  @Input()
  title = `test`;

  @Input()
  content = `testowy kontent bez sensu`;

  @Input()
  link = `https://google.com`;

  constructor() {}

  ngOnInit(): void {}
}
