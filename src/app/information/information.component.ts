import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface ContactForm {
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
  form!: FormGroup<ContactForm>;

  constructor(private fb: FormBuilder, private router: Router) {}

  @HostListener('wheel', ['$event'])
  onScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    const documentHeight = Math.max(
      document.body.scrollHeight || 0,
      document.documentElement.scrollHeight || 0,
      document.body.offsetHeight || 0,
      document.documentElement.offsetHeight || 0,
      document.body.clientHeight || 0,
      document.documentElement.clientHeight || 0
    );

    if (scrollPosition === 0) {
      // window.history.back();
    }

    if (scrollPosition + windowHeight >= documentHeight) {
      this.router.navigate(['/breakdown']);
    }
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.form = this.fb.group<ContactForm>({
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
