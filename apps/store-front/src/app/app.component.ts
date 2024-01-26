
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@jmc-nx-monorepo/shared';



@Component({
  standalone: true,
  imports: [RouterModule, SharedModule],
  selector: 'jmc-nx-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Store Front';
}
