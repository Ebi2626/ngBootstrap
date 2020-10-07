import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu.component';
import { SliderComponent } from './home/slider/slider.component';
import { CardListComponent } from './home/card-list/card-list.component';
import { TextSectionComponent } from './home/text-section/text-section.component';
import { CardComponent } from './home/card-list/card/card.component';
import { TabbedInterfaceComponent } from './about/tabbed-interface/tabbed-interface.component';
import { TabComponent } from './about/tabbed-interface/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    FormComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    SliderComponent,
    CardListComponent,
    TextSectionComponent,
    CardComponent,
    TabbedInterfaceComponent,
    TabComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
