import { Component, OnDestroy, OnInit } from '@angular/core';
import { Role } from '../../../../../../../shared/enums/Role';
import { UserFilterService } from '../../../../services/user-filter.service';
import { TableFilter } from '../../../../../shared/types/TableFilter';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss'],
})
export class ListFiltersComponent implements OnInit, OnDestroy {
  roles: Role[] = Object.keys(Role) as Role[];
  filter: TableFilter | null = null;
  filterSubscription: Subscription;
  searchTerm: string = '';

  constructor(private readonly userFilterService: UserFilterService) {}

  ngOnInit() {
    this.subscribeToFilterChange();
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }

  setRole({ target: { value: role } }: any) {
    this.userFilterService.setFilter({ role: !!role ? role : null });
  }

  setQuery() {
    this.userFilterService.setFilter({ query: this.searchTerm });
  }

  private subscribeToFilterChange() {
    this.filterSubscription = this.userFilterService.filter$.subscribe((filter) => {
      if (!this.searchTerm) {
        this.searchTerm = filter.query;
      }

      this.filter = filter;
    });
  }
}
