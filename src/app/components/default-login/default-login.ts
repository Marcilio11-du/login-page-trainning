import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login',
  imports: [],
  templateUrl: './default-login.html',
  styleUrls: ['./default-login.scss'],
})
export class DefaultLogin {

  @Input() title: string = "";
  @Input() primaryButtonText = "";
  @Input() secondaryButtonText = "";
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submitForm() {
    this.onSubmit.emit();
  }
  navigate() {
    this.onNavigate.emit();
  }

}
