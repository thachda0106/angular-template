import { Component, Inject, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultLayoutComponent } from '../shared/layout/default-layout/default-layout.component';
import { REQUEST } from '../core/tokens/express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DefaultLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-template-app';

  constructor(@Optional() @Inject(REQUEST) req: Request) {
    console.log({ req: req?.body });
  }
}
