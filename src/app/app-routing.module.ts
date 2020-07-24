import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstTemplateComponent } from './first-template/first-template.component';
import { SecondTemplateComponent } from './second-template/second-template.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent,
    children: [
         { path:'first', component: FirstTemplateComponent },
         { path:'second',component: SecondTemplateComponent }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
