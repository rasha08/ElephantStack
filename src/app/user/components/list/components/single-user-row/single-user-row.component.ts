import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../../shared/models/User';
import { Router } from '@angular/router';
import { appRoutes } from '../../../../../shared/consts/routes';

@Component({
  selector: 'app-single-user-row',
  templateUrl: './single-user-row.component.html',
  styleUrls: ['./single-user-row.component.scss'],
})
export class SingleUserRowComponent {
  @Input('user') user: User;
  @Output() removeUser: EventEmitter<string> = new EventEmitter();

  constructor(private readonly router: Router) {}

  async editUser() {
    await this.router.navigateByUrl(`users/${appRoutes.user.edit.replace(':id', this.user.id)}`);
  }
}
