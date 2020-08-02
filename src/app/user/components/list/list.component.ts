import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable, Subscription } from 'rxjs';
import { TableFilter } from '../../../shared/types/TableFilter';
import { defaultIfEmpty, take, tap } from 'rxjs/operators';
import { UserFilterService } from '../../services/user-filter.service';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  users$: Observable<User[]>;
  filter: TableFilter;
  private filterSubscription: Subscription;

  constructor(private readonly userService: UserService, private readonly userFilterService: UserFilterService) {
    this.subscribeToFilterChanges();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe();
  }

  removeUser(userId: string) {
    this.userService
      .remove(userId)
      .pipe(
        tap(() => this.getUsers()),
        take(1)
      )
      .subscribe();
  }

  private subscribeToFilterChanges() {
    this.filterSubscription = this.userFilterService.filter$.subscribe((filter) => {
      this.filter = filter;
    });
  }

  private getUsers(): void {
    this.users$ = this.userService.list().pipe(defaultIfEmpty([]));
  }
}
