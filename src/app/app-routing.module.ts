import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { fileImportGuard } from './guard/file-imported.guard';
import { WriterPageComponent } from './pages/writer-page/writer-page.component';

const routes: Routes = [
  {
    path: 'start',
    component: StartPageComponent
  },
  {
    path: '',
    component: HomePageComponent,
    //canActivate: [fileImportGuard]
  },
  {
    path: 'writer',
    component: WriterPageComponent,
  },
  {
    path: '**',
    redirectTo: '/start'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { } 
