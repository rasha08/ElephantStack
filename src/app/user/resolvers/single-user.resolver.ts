import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../../shared/models/User';
import { UserService } from '../services/user.service';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SingleUserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    const userId = route.paramMap.get('id');
    if (userId) {
      return this.userService.show(route.paramMap.get('id'));
    }

    return of(null);
  }
}
