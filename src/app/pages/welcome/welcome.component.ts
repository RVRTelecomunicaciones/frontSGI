import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLinkActive,
  Routes,
} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  isViewInitialized = false;
  navLinks: any[] = [];
  validateForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.navLinks =
      this.route.routeConfig && this.route.routeConfig.children
        ? this.buildNavItems(this.route.routeConfig.children)
        : [];

    this.validateForm = this.fb.group({
      codigoCotizacion: [null, [Validators.required]],
      cantidadInforme: [null, [Validators.required]],
      tipoCotizacion: [null, [Validators.required]],
      estadoCotizacion: [null, [Validators.required]],
      servicioTipoCotizacion: [null, [Validators.required]],
      codigocs: [''],
      adjuntocs: [''],
    });
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

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }
}
