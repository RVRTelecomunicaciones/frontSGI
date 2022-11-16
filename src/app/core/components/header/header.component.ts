import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfigLayout } from 'src/app/config/interfaces/config-layout.interface';
import { AuthApplication } from '../../application/auth.application';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  isCollapsedMobile = false;
  config!: ConfigLayout;

  @Output()
  buttonExpand: EventEmitter<string> = new EventEmitter();
  @Output()
  buttonExpandMobile: EventEmitter<string> = new EventEmitter();

  constructor(private auth: AuthApplication) {
    console.log(this.config);
  }

  ngOnInit(): void {}

  logout(): void {
    this.auth.logout();
  }

  clickExpand() {
    if (this.isCollapsed) {
      this.isCollapsed = false;
      this.buttonExpand.emit('false');
    } else {
      this.isCollapsed = true;
      this.buttonExpand.emit('true');
    }
  }
  clickMobileExpand() {
    if (this.isCollapsedMobile) {
      this.isCollapsedMobile = false;
      this.buttonExpand.emit('false');
    } else {
      this.isCollapsedMobile = true;
      this.buttonExpand.emit('true');
    }
  }
}
