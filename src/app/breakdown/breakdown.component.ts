import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breakdown',
  templateUrl: './breakdown.component.html',
  styleUrls: ['./breakdown.component.scss']
})
export class BreakdownComponent implements OnInit {
  feedback = new FormControl<string>('', {
    validators: [Validators.required],
    nonNullable: true
  });
  AItext = "Everybody’s “in the cloud” right? So why are only 10% of companies reaping the full benefits -- like revenue growth, new revenue streams, improved profitability and better decision making? These standouts are what we call cloud-powered companies and they’re getting cloud RIGHT. But how are they doing it? And how can you do it too? PwC's 2023 Cloud Business Survey is here, and it reveals that a staggering 80% of executives are not yet prioritizing Industry Cloud, failing to unlock greater business value -- and falling behind. Industry Cloud can help you stay ahead of the curve — achieving cloud success faster, and often with significantly fewer barriers to transformation. A winning cloud strategy isn’t typically one-size-fits-all, and our industry-leading knowledge across business sectors can help take your cloud transformation to the next level and deliver sustainable value from your investments."
  pageLoad = false;
  constructor(private router: Router) {}

  @HostListener('wheel', ['$event'])
  onScroll() {

    if (!this.pageLoad) {
      return;
    }

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
      window.history.back();
    }

    if (scrollPosition + windowHeight >= documentHeight) {
      this.router.navigate(['/keywords']);
    }
  }

  ngOnInit(): void {
    window.scrollTo(0, 1);

    setTimeout(() => {
      this.pageLoad = true;
    }, 1000);
  }

  onSubmit() {
    if (!this.feedback.valid) {
      return;
    }

    console.log(this.feedback.value);
  }
}
