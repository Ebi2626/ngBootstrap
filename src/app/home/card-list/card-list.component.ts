import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  items = [
    {
      title: 'testowy tytuł',
      content: 'testowa zawartość karty numer',
      link: 'https://testowy.com',
      img: {
        url: 'https://picsum.photos/200/200?random=1',
        alt: 'test',
      },
    },
    {
      title: 'testowy tytuł',
      content: 'testowa zawartość karty numer',
      link: 'https://testowy.com',
      img: {
        url: 'https://picsum.photos/400/400?random=1',
        alt: 'test',
      },
    },
    {
      title: 'testowy tytuł',
      content: 'testowa zawartość karty numer',
      link: 'https://testowy.com',
      img: {
        url: 'https://picsum.photos/400/400?random=1',
        alt: 'test',
      },
    },
    {
      title: 'testowy tytuł',
      content: 'testowa zawartość karty numer',
      link: 'https://testowy.com',
      img: {
        url: 'https://picsum.photos/400/400?random=1',
        alt: 'test',
      },
    },
    {
      title: 'testowy tytuł',
      content: 'testowa zawartość karty numer',
      link: 'https://testowy.com',
      img: {
        url: 'https://picsum.photos/400/400?random=1',
        alt: 'test',
      },
    },
    {
      title: 'testowy tytuł',
      content: 'testowa zawartość karty numer',
      link: 'https://testowy.com',
      img: {
        url: 'https://picsum.photos/400/400?random=1',
        alt: 'test',
      },
    },
    {
      title: 'testowy tytuł',
      content: 'testowa zawartość karty numer',
      link: 'https://testowy.com',
      img: {
        url: 'https://picsum.photos/400/400?random=1',
        alt: 'test',
      },
    },
    {
      title: 'testowy tytuł',
      content: 'testowa zawartość karty numer',
      link: 'https://testowy.com',
      img: {
        url: 'https://picsum.photos/400/400?random=1',
        alt: 'test',
      },
    },
    {
      title: 'testowy tytuł',
      content: 'testowa zawartość karty numer',
      link: 'https://testowy.com',
      img: {
        url: 'https://picsum.photos/400/400?random=1',
        alt: 'test',
      },
    },
    {
      title: 'testowy tytuł',
      content: 'testowa zawartość karty numer',
      link: 'https://testowy.com',
      img: {
        url: 'https://picsum.photos/400/400?random=1',
        alt: 'test',
      },
    },
    {
      title: 'testowy tytuł',
      content: 'testowa zawartość karty numer',
      link: 'https://testowy.com',
      img: {
        url: 'https://picsum.photos/400/400?random=1',
        alt: 'test',
      },
    },
    {
      title: 'testowy tytuł',
      content: 'testowa zawartość karty numer',
      link: 'https://testowy.com',
      img: {
        url: 'https://picsum.photos/400/400?random=1',
        alt: 'test',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
