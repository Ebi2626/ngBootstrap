import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbed-interface',
  templateUrl: './tabbed-interface.component.html',
  styleUrls: ['./tabbed-interface.component.scss'],
})
export class TabbedInterfaceComponent implements OnInit {
  selectedTab = 1;
  selected = [
    {
      title: 'Dane',
      content:
        'Ta strona wykorzystuje angulara jedynie do budowy komponentów oraz przekazywania danych. Całość interakcji jest realizowana przez skrypt js bootstrapa, jquery oraz poppera.',
    },
    {
      title: 'Style',
      content:
        'Ta strona wykorzystuje standardową bibliotekę bootstrapa, a wszelkie dodatkowe wymagane style są pisane w ramach komponentów.',
    },
    {
      title: 'HTML',
      content:
        'Dzięki oddzieleniu angulara od bootstrapa mamy pełną kontrolę nad stosowanymi znacznikami html i jego semantyką. Pozwala to nam na spełnienie wymagań WCAG 2.1 w zakresie semantyki kodu.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
