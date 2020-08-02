import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  protected readonly resourceUrl: string = '';
  constructor(protected readonly httpClient: HttpClient) {}

  list() {
    return this.httpClient.get(this.formUrl()) as Observable<T[]>;
  }

  show(id: string) {
    return this.httpClient.get(this.formUrl(id)) as Observable<T>;
  }

  create(entity: T) {
    return this.httpClient.post(this.formUrl(), entity) as Observable<T>;
  }

  update(id: string, entity: Partial<T>) {
    return this.httpClient.patch(this.formUrl(id), entity) as Observable<T>;
  }

  remove(id: string) {
    return this.httpClient.delete(this.formUrl(id)) as Observable<T>;
  }

  private formUrl(resourceId?: string) {
    return `${environment.apiUrl}/${this.resourceUrl}${resourceId ? `/${resourceId}` : ''}`;
  }
}
