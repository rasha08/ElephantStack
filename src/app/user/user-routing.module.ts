import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from '../shared/consts/routes';
import { ListComponent } from './components/list/list.component';
import { SingleUserFormComponent } from './components/single-user-form/single-user-form.component';
import { SingleUserResolver } from './resolvers/single-user.resolver';

const routes: Routes = [
  {
    path: appRoutes.user.list,
    component: ListComponent,
  },
  {
    path: appRoutes.user.create,
    component: SingleUserFormComponent,
  },
  {
    path: appRoutes.user.edit,
    component: SingleUserFormComponent,
    resolve: {
      user: SingleUserResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
