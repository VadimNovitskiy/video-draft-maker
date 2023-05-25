import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface contactForm {
  company: FormControl<string>;
  product: FormControl<string>;
  audience: FormControl<string>;
  keyProblem: FormControl<string>;
  keyMessage: FormControl<string>;
  voice: FormControl<string>;
  videoRuntime: FormControl<number | null>;
  firstPoint: FormControl<string>;
  secondPoint: FormControl<string>;
  thirdPoint: FormControl<string>;
  action: FormControl<string>;
}

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  form!: FormGroup<contactForm>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group<contactForm>({
      company: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      product: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      audience: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      keyProblem: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      keyMessage: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      voice: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      videoRuntime: new FormControl<number | null>(null, {
        validators: [Validators.required]
      }),
      firstPoint: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      secondPoint: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      thirdPoint: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      action: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true
      }),
    })
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    console.log(this.form.value);
  }

}
