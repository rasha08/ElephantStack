import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { SingleUserFormComponent } from './components/single-user-form/single-user-form.component';
import { SingleUserRowComponent } from './components/list/components/single-user-row/single-user-row.component';
import { UserService } from './services/user.service';
import { UserRoutingModule } from './user-routing.module';
import { ApplyFilterPipe } from './pipes/apply-filter.pipe';
import { UserFilterService } from './services/user-filter.service';
import { ListHeaderComponent } from './components/list/components/list-header/list-header.component';
import { ListFiltersComponent } from './components/list/components/list-filters/list-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleUserResolver } from './resolvers/single-user.resolver';
import { ValidationErrorComponent } from './components/single-user-form/components/validation-error/validation-error.component';

@NgModule({
  declarations: [
    ListComponent,
    SingleUserFormComponent,
    SingleUserRowComponent,
    ApplyFilterPipe,
    ListHeaderComponent,
    ListFiltersComponent,
    ValidationErrorComponent,
  ],
  imports: [CommonModule, UserRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [UserService, UserFilterService, SingleUserResolver],
})
export class UserModule {}
