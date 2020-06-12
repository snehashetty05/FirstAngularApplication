import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CalculatorGridComponent } from './calculator-grid/calculator-grid.component';



const routes: Routes = [
  {path:'',redirectTo: 'main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'calculator',component: CalculatorComponent},
  {path: 'calculatorgrid', component: CalculatorGridComponent},
  {path: 'shopping' ,component: ShoppingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
