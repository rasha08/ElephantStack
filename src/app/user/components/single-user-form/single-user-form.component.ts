import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../shared/models/User';
import { UserService } from '../../services/user.service';
import { Role } from '../../../../../shared/enums/Role';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-single-user-form',
  templateUrl: './single-user-form.component.html',
  styleUrls: ['./single-user-form.component.scss'],
})
export class SingleUserFormComponent {
  userId?: string;
  roles: Role[] = Object.keys(Role) as Role[];
  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    role: new FormControl(null, [Validators.required]),
  });
  error?: string;
  submitting: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
    this.activatedRoute.data.subscribe(({ user }: { user: User }) => {
      if (user?.id) {
        this.userId = user.id;
        this.userForm.patchValue({ ...user });
      }
    });
  }

  onSubmit() {
    if (!this.userForm.invalid && this.userForm.dirty) {
      this.submitting = true;
      if (this.userId) {
        this.userService.update(this.userId, this.userForm.value).subscribe(
          () => this.goToUserList(),
          ({ error }) => {
            this.submitting = false;
            this.error = error.message;
          }
        );
      } else {
        this.userService.create(this.userForm.value).subscribe(
          () => this.goToUserList(),
          ({ error }) => {
            this.submitting = false;
            this.error = error.message;
          }
        );
      }
    }
  }

  debug(val) {
    return JSON.stringify(val, null, 2);
  }

  private goToUserList() {
    this.router.navigateByUrl('/users');
  }
}
