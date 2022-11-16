import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/services/config.service';
import { AuthApplication } from '../../application/auth.application';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  constructor(
    private config: ConfigService,
    private authUseCase: AuthApplication
  ) {
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
