import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TesteCalcComponent } from './components/teste-calc/teste-calc.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: FirstComponentComponent, canActivate: [AuthGuard]},
  {path: 'list', component: ListRenderComponent, canActivate: [AuthGuard]},
  {path: 'calculadora', component:TesteCalcComponent, canActivate: [AuthGuard]},
  {path: 'list/:id', component:ItemDetailComponent, canActivate: [AuthGuard]},
  {path: 'form', component:FormComponent, canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
