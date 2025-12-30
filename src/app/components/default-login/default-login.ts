import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-login',
  imports: [],
  templateUrl: './default-login.html',
  styleUrl: './default-login.scss',
})
export class DefaultLogin {

  @Input() title: string = "";
  @Input() primaryButtonText = "";
  @Input() secondaryButtonText = "";

}
