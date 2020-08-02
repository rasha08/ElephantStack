import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutes } from '../../../../../shared/consts/routes';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss'],
})
export class ListHeaderComponent {
  constructor(private readonly router: Router) {}

  createUser() {
    this.router.navigateByUrl(`users/${appRoutes.user.create}`);
  }
}
