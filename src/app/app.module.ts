import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePaginaComponent } from './home-pagina/home-pagina.component';
import { LoginComponent } from './login/login.component';
import { WelkomPaginaComponent } from './welkom-pagina/welkom-pagina.component';
import { InfoEventComponent } from './info-event/info-event.component';

import { ContactPaginaComponent } from './contact-pagina/contact-pagina.component';
import { ProgrammaComponent } from './programma/programma.component';
import { BudgetEnKostenramingComponent } from './budget-en-kostenraming/budget-en-kostenraming.component';
import { VoorbereidingComponent } from './voorbereiding/voorbereiding.component';
import { OverviewPaginaComponent } from './overview-pagina/overview-pagina.component';
import { KalendarPaginaComponent } from './kalendar-pagina/kalendar-pagina.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { EditInfoEventComponent } from './edit-info-event/edit-info-event.component';

const routes: Routes = [
    {path: '', component:HomePaginaComponent},
    {path: 'login', component:LoginComponent},
    {path: 'welkom', component:WelkomPaginaComponent},
    {path: 'info-event', component:InfoEventComponent},
    {path: 'contact', component:ContactPaginaComponent},
    {path: 'programma', component:ProgrammaComponent},
    {path: 'budget-en-kostenraming', component:BudgetEnKostenramingComponent},
    {path: 'voorbereiding', component:VoorbereidingComponent},
    {path: 'overview', component:OverviewPaginaComponent},
    {path: 'kalendar', component:KalendarPaginaComponent},
    {path: '**', component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePaginaComponent,
    LoginComponent,
    WelkomPaginaComponent,
    InfoEventComponent,
    
    ContactPaginaComponent,
         ProgrammaComponent,
         BudgetEnKostenramingComponent,
         VoorbereidingComponent,
         OverviewPaginaComponent,
         KalendarPaginaComponent,
         PageNotFoundComponent,
         EditInfoEventComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
