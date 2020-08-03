import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../shared/models/User';
import { UserService } from '../../services/user.service';
import { Role } from '../../../../../shared/enums/Role';
import { tap } from 'rxjs/operators';
import { emailRegex } from '../../../../../shared/utils/emailRegex';

@Component({
  selector: 'app-single-user-form',
  templateUrl: './single-user-form.component.html',
  styleUrls: ['./single-user-form.component.scss'],
})
export class SingleUserFormComponent {
  userId?: string;
  roles: Role[] = Object.keys(Role) as Role[];
  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/)]),
    email: new FormControl('', [Validators.pattern(emailRegex), Validators.required]),
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

  handleError({ message }: { message: string }) {
    this.submitting = false;
    this.error = message;
  }

  onSubmit() {
    if (!this.userForm.invalid && this.userForm.dirty) {
      this.submitting = true;
      if (this.userId) {
        this.userService.update(this.userId, this.userForm.value).subscribe(
          () => this.goToUserList(),
          ({ error }) => this.handleError(error)
        );
      } else {
        this.userService.create(this.userForm.value).subscribe(
          () => this.goToUserList(),
          ({ error }) => this.handleError(error)
        );
      }
    }
  }

  private goToUserList() {
    this.router.navigateByUrl('/users');
  }
}
