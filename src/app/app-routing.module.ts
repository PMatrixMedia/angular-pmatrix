import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
      path: 'projects',
      loadChildren: 'projects/projects.module#projectsModule'
  },
  {
    path: 'blog',
    loadChildren: 'blog/blog.module#blogModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
