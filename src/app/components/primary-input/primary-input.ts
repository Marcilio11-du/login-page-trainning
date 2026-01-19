import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"
@Component({
  selector: 'app-primary-input',
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useClass: forwardRef(() => PrimaryInput),
      multi: true
    }
  ],
  templateUrl: './primary-input.html',
  styleUrl: './primary-input.scss',
})
export class PrimaryInput implements ControlValueAccessor{

  @Input() type: InputTypes = "text";
  @Input() placeHolder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";

  value: string = "";
  
  onChange: any = () => {}
  onTouched: any = () => {}

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onChange(input.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
