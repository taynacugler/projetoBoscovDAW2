import {
  Component,
  Input,
  forwardRef
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';

  value: string = '';
  disabled = false;

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
