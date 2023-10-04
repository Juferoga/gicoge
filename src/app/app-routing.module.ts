import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
    data: {
      title : 'Inicio',
      link : '/inicio'
    }
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full' }, // redirect to `home-component`
  {
    path: '**',
    component: PageNotFoundComponent
  },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
