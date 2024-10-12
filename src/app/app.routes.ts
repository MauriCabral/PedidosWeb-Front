import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMenuComponent } from './app-component/app-menu/app-menu.component';
import { AppHomeComponent } from './app-component/app-home/app-home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: AppHomeComponent },
    { path: 'menu', component: AppMenuComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
