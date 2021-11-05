import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu-component/menu.component';
import { MoreInfoComponent } from './more-info-component/more-info.component';

const routes: Routes = [
  { path:'', redirectTo:'menu', pathMatch:'full' },
  { path:'menu', component: MenuComponent},
  { path: 'more-info', component: MoreInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
