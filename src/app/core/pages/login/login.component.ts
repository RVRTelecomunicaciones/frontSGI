import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthApplication } from '../../application/auth.application';
import { AuthFactory } from '../../domain/auth.factory';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  /*   @Output() onLogin: EventEmitter<AuthModel> = new EventEmitter<AuthModel>();
   */
  isFormSubmitted = false;

  @ViewChild('focusInitial')
  focusInitial!: ElementRef<HTMLInputElement>;

  password: any;

  public showPassword?: boolean = false;

  async submitLogin() {
    //console.log('A');
    // Set flag to true
    this.isFormSubmitted = true;
    // Return if form is invalid
    if (this.formLogin.invalid) {
      return;
    }

    const values = this.formLogin.value;
    const auth = AuthFactory.create(values.email, values.password);
    this.authApplication.login(auth);

    /* const userInfo: AuthModel = this.formLogin.value;
    console.log(userInfo);

    this.onLogin.emit(userInfo); */
  }

  constructor(
    private formBuilder: FormBuilder,
    private readonly authApplication: AuthApplication
  ) {}

  ngOnInit(): void {
    this.showPassword;

    // Patterns
    const PAT_EMAIL = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$';

    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    if (this.focusInitial !== undefined) {
      this.focusInitial.nativeElement.focus();
      console.log('focus');
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  ngAfterViewInit(): void {
    /*requestAnimationFrame(() => this.focusInitial.nativeElement.focus());*/
  }
}
