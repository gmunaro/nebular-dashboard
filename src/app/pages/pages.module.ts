import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';

import { PagesRoutingModule } from './pages-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home/home.component';
import { XmlDetailsComponent } from './xml-details/xml-details.component';
import { XmlDetailsFormComponent } from './xml-details/xml-details-form/xml-details-form.component';
import { CustomButtonComponent } from '../shared/components/custom-button/custom-button.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    TranslateModule,
    NbCardModule,
    NbAlertModule,
    NbIconModule,
    ],
  declarations: [
    PagesComponent,
    HomeComponent,
    XmlDetailsComponent,
    XmlDetailsFormComponent,
  ],
})
export class PagesModule {
}
