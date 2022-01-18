import { Component, OnInit } from '@angular/core';
import { AuthUseCase } from '../../application/auth.usecase';
import { AuthModel } from '../../domain/auth.model';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  constructor(private authUseCase: AuthUseCase) {}
  ngOnInit(): void {}

  login(auth: AuthModel) {
    this.authUseCase.login(auth);
  }
}
