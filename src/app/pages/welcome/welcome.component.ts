import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLinkActive,
  Routes,
} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  isViewInitialized = false;

  navLinks: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.navLinks =
      this.route.routeConfig && this.route.routeConfig.children
        ? this.buildNavItems(this.route.routeConfig.children)
        : [];
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  buildNavItems(routes: Routes) {
    return routes
      .filter((route) => route.data)
      .map(({ path = '', data }) => ({
        path: path,
        label: data!.label,
        icon: data!.icon,
      }));
  }

  isLinkActive(rla: RouterLinkActive): boolean {
    const routerLink = rla.linksWithHrefs.first;

    return this.router.isActive(routerLink.urlTree, false);
  }
}
