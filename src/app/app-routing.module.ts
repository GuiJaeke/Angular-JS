import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TesteCalcComponent } from './components/teste-calc/teste-calc.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'calculadora', component:TesteCalcComponent},
  {path: 'list/:id', component:ItemDetailComponent},
  {path: 'form', component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
