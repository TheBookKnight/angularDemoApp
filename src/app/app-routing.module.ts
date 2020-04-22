/*
  This is the routing file. It determines what files will display
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// have to import components
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
