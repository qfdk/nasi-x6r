import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ResultatComponent } from './resultat/resultat.component';
import { HelpComponent } from './pages/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavComponent,
    FooterComponent,
    ResultatComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
