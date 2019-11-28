import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBeforeafterComponent } from './add-beforeafter/add-beforeafter.component';


const routes: Routes = [
  { path: 'add-beforeafter', component: AddBeforeafterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
