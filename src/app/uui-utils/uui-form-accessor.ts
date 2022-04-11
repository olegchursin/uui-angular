import { Directive, ElementRef, forwardRef, HostBinding, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[uuiFormAccessor]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UuiFormDirective),
      multi: true
    }
  ]
})
export class UuiFormDirective implements ControlValueAccessor {
  @HostBinding('value') hostValue: any;

  lastValue: any;
  private onChange = (_value: any) => {};
  private onTouched = () => {};

  constructor(private el: ElementRef) {}

  private setNativeValue(value) {
    if (this.el?.nativeElement?.tagName === 'UUI-CHECKBOX') {
      this.el.nativeElement.checked = value;
    }
  }

  writeValue(value: any) {
    this.hostValue = value;
    this.setNativeValue(value);
  }

  setDisabledState(isDisabled: boolean) {
    if (this.el.nativeElement) {
      this.el.nativeElement.disabled = isDisabled;
    }
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  @HostListener('toggleChange', ['$event.target.selected'])
  _handleToggleEvent(selected: any) {
    if (this.el?.nativeElement?.tagName === 'UUI-SWITCH') {
      if (selected !== this.lastValue) {
        this.el.nativeElement.selected = selected;
        this.lastValue = selected;
        this.onChange(selected);
        this.onTouched();
      }
    }
  }

  @HostListener('input', ['$event.target.value'])
  @HostListener('valueChanged', ['$event.detail'])
  _handleInputEvent(value: any) {
    if (JSON.stringify(value) !== JSON.stringify(this.lastValue)) {
      this.lastValue = value;
      this.setNativeValue(value);
      this.onChange(value);
      this.onTouched();
    }
  }
}
