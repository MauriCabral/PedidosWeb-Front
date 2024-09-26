import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMenuComponent } from './app-component/app-menu/app-menu.component';
import { AppDetallePizzaComponent } from './app-component/app-detalle-pizza/app-detalle-pizza.component'

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'menu', component: AppMenuComponent },
    { path: 'detalle', component: AppDetallePizzaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
