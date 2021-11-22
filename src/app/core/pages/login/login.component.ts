import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faCoffee, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faCoffee = faCoffee;
  faEyes = faEye;

  formLogin!: FormGroup;

  isFormSubmitted = false;

  @ViewChild('focusInitial')
  focusInitial!: ElementRef<HTMLInputElement>;

  async submitLogin() {
    // Return if form is invalid
    if (this.formLogin.invalid) {
      return;
    }
    // Set flag to true
    this.isFormSubmitted = true;
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Patterns
    const PAT_EMAIL = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$';

    this.formLogin = this.formBuilder.group({
      usernameOrEmail: [
        '',
        [Validators.required, Validators.pattern(PAT_EMAIL)],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    if (this.focusInitial !== undefined) {
      this.focusInitial.nativeElement.focus();
      console.log('focus');
    }
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => this.focusInitial.nativeElement.focus());
  }

  get f() {
    return this.formLogin.controls;
  }
}
