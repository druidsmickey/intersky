import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AjaxComponent } from './ajax/ajax.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'header', component: HeaderComponent},
  {path:'footer', component: FooterComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'ajax', component: AjaxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
