import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AddEditComponent } from './add-edit.component';
import {  HomeComponent } from "./home.component";
import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule
    ],
    declarations: [
        AddEditComponent,
        HomeComponent,
        LayoutComponent
    ]
})
export class HomeModule { }