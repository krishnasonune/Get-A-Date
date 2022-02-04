import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  { path: '', component: InputComponent },
  { path: 'home', component: InputComponent },
  { path: 'result', component: ResultComponent },
  { path: '**', component: InputComponent }
];

export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(routes);

