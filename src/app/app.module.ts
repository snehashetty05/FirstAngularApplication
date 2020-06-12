import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CalculatorGridComponent } from './calculator-grid/calculator-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CalculatorComponent,
    MainPageComponent,
    ShoppingComponent,
    CalculatorGridComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
