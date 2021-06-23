import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit.component';
import { HomeComponent } from './home.component';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [   
            {path: '', component: HomeComponent},
            { path: 'add', component: AddEditComponent},
            { path: 'edit/:id', component: AddEditComponent},
        ]
    },
    {
        path:"**",redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }