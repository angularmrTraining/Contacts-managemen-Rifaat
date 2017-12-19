import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import{ContactComponent} from './contact/contact.component';
import{AboutComponent} from './about/about.component';

@NgModule({
    imports: [
    RouterModule.forRoot([
         { path: 'contact', component: ContactComponent },
         { path: 'about', component: AboutComponent }

    ],{preloadingStrategy:PreloadAllModules})
  ],
  exports:[RouterModule]
 })
export class AppRoutingModule {}
