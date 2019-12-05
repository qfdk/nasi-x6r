import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './pages/help/help.component';
import { IndexComponent } from './pages/index/index.component';

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: '/index' },
//   { path: 'index', redirectTo: '/index' },
//   { path: 'help', redirectTo: '/help' }
// ];
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
