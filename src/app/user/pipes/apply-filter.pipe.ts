import { Pipe, PipeTransform } from '@angular/core';
import { TableFilter } from '../../shared/types/TableFilter';
import { User } from '../../shared/models/User';

@Pipe({ name: 'applyFilter' })
export class ApplyFilterPipe implements PipeTransform {
  transform(users: User[], filter: TableFilter): User[] {
    if (!users) {
      return [];
    }

    return users.filter(({ firstName, lastName, email, role }) => {
      return (
        `${firstName} ${lastName} ${email}`.toLowerCase().includes(filter.query) &&
        (!filter.role ? true : role === filter.role)
      );
    });
  }
}
