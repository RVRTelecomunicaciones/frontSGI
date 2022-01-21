import { Component, OnInit } from '@angular/core';
import { ConfigLayout } from 'src/app/config/interfaces/config-layout.interface';
import { AuthUseCase } from '../../application/auth.usecase';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  config!: ConfigLayout;
  constructor(private auth: AuthUseCase) {
    console.log(this.config);
  }

  ngOnInit(): void {}

  logout(): void {
    this.auth.logout();
  }
}
