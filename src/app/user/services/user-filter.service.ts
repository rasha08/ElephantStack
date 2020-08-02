import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TableFilter } from '../../shared/types/TableFilter';

@Injectable({
  providedIn: 'root',
})
export class UserFilterService {
  private tableFilter = new BehaviorSubject<TableFilter>({
    query: '',
    role: null,
  });

  public filter$: Observable<TableFilter> = this.tableFilter.asObservable();

  setFilter(filter: Partial<TableFilter>) {
    this.tableFilter.next({ ...this.tableFilter.value, ...filter });
  }
}
