import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from '../@theme/components';
import { HomeComponent } from './home/home.component';
import { XmlDetailsComponent } from './xml-details/xml-details.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'xml-details',
      component: XmlDetailsComponent
    },
    {
      path: '**',
      component: NotFoundComponent,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
