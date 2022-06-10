import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { BlogComponent } from './page/blog/blog.component';

const routes: Routes = [
{path:'',  redirectTo:'admin', pathMatch:'full'},
  {path:'admin', component:AdminComponent},
  {path:'blog', component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
