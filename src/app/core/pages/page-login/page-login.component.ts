import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/services/config.service';
import { AuthUseCase } from '../../application/auth.usecase';
import { AuthModel } from '../../domain/auth.model';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  constructor(private config: ConfigService, private authUseCase: AuthUseCase) {
    console.log('INICIANDO');

    this.config.configuration = {
      header: { hidden: true },
      sidebar: { hidden: true },
    };
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.config.configuration = {
      header: { hidden: false },
      sidebar: { hidden: false },
    };
  }

  login(auth: any) {
    this.authUseCase.login(auth);
  }
}
