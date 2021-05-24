import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Self,
  ViewChild
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  Validators
} from '@angular/forms';
import {
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl
} from '@angular/material/form-field';
import { Subject } from 'rxjs';

@Component({
  selector: 'phone-input',
  template: ''
})
export class FormFieldCustomControl {
  form: FormGroup = new FormGroup({
    tel: new FormControl(new MyTel('', '', ''))
  });
}

export class MyTel {
  constructor(
    public country: string,
    public cellular: string,
    public mobile: string
  ) {}
}

@Component({
  selector: 'tel-input',
  templateUrl: 'tel-input.html',
  styleUrls: ['tel-input.css'],
  providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }],
  host: {
    '[class.floating]': 'shouldLabelFloat',
    '[id]': 'id'
  }
})
export class MyTelInput
  implements ControlValueAccessor, MatFormFieldControl<MyTel>, OnDestroy
{
  static nextId = 0;
  @ViewChild('country') countryInput!: HTMLInputElement;
  @ViewChild('cellular') cellularInput!: HTMLInputElement;
  @ViewChild('mobile') mobileInput!: HTMLInputElement;

  parts: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  controlType = 'tel-input';
  id = `tel-input-${MyTelInput.nextId++}`;
  onChange = (_: any) => {};
  onTouched = () => {};

  get empty() {
    const {
      value: { country, cellular, mobile }
    } = this.parts;

    return !country && !cellular && !mobile;
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input('aria-describedby') userAriaDescribedBy = '';

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder = '';

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.parts.disable() : this.parts.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): any {
    if (this.parts.valid) {
      const {
        value: { country, cellular, mobile }
      } = this.parts;
      return `${country}${cellular}${mobile}`;
    }
    return null;
  }
  set value(tel: any) {
    const { country, cellular, mobile } = tel || new MyTel('', '', '');
    this.parts.setValue({ country, cellular, mobile });
    this.stateChanges.next();
  }

  get errorState(): boolean {
    return this.parts.invalid && this.parts.dirty;
  }

  constructor(
    formBuilder: FormBuilder,
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    @Optional() @Inject(MAT_FORM_FIELD) public _formField: MatFormField,
    @Optional() @Self() public ngControl: NgControl
  ) {
    this.parts = formBuilder.group({
      country: [
        null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)]
      ],
      cellular: [
        null,
        [Validators.required, Validators.minLength(2), Validators.maxLength(2)]
      ],
      mobile: [
        null,
        [Validators.required, Validators.minLength(7), Validators.maxLength(10)]
      ]
    });

    _focusMonitor.monitor(_elementRef, true).subscribe(origin => {
      if (this.focused && !origin) {
        this.onTouched();
      }
      this.focused = !!origin;
      this.stateChanges.next();
    });

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  autoFocusNext(
    control: AbstractControl,
    nextElement?: HTMLInputElement
  ): void {
    if (!control.errors && nextElement) {
      this._focusMonitor.focusVia(nextElement, 'program');
    }
  }

  autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
    if (control.value.length < 1) {
      this._focusMonitor.focusVia(prevElement, 'program');
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  setDescribedByIds(ids: string[]) {
    const controlElement = this._elementRef.nativeElement.querySelector(
      '.tel-input-container'
    )!;
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }

  onContainerClick() {
    if (this.parts.controls.mobile.valid) {
      this._focusMonitor.focusVia(this.mobileInput, 'program');
    } else if (this.parts.controls.cellular.valid) {
      this._focusMonitor.focusVia(this.mobileInput, 'program');
    } else if (this.parts.controls.country.valid) {
      this._focusMonitor.focusVia(this.cellularInput, 'program');
    } else {
      this._focusMonitor.focusVia(this.countryInput, 'program');
    }
  }

  writeValue(tel: MyTel | null): void {
    this.value = tel;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  _handleInput(control: AbstractControl, nextElement?: HTMLInputElement): void {
    this.autoFocusNext(control, nextElement);
    this.onChange(this.value);
  }
}
