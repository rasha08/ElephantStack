import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiService<User> {
  protected resourceUrl: string = 'users';
  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient);
  }
}
