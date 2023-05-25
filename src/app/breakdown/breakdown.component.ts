import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-breakdown',
  templateUrl: './breakdown.component.html',
  styleUrls: ['./breakdown.component.scss']
})
export class BreakdownComponent {
  feedback = new FormControl<string>('', {
    validators: [Validators.required],
    nonNullable: true
  });
  AItext = "Everybody’s “in the cloud” right? So why are only 10% of companies reaping the full benefits -- like revenue growth, new revenue streams, improved profitability and better decision making? These standouts are what we call cloud-powered companies and they’re getting cloud RIGHT. But how are they doing it? And how can you do it too? PwC's 2023 Cloud Business Survey is here, and it reveals that a staggering 80% of executives are not yet prioritizing Industry Cloud, failing to unlock greater business value -- and falling behind. Industry Cloud can help you stay ahead of the curve — achieving cloud success faster, and often with significantly fewer barriers to transformation. A winning cloud strategy isn’t typically one-size-fits-all, and our industry-leading knowledge across business sectors can help take your cloud transformation to the next level and deliver sustainable value from your investments."


  onSubmit() {
    if (!this.feedback.valid) {
      return;
    }

    console.log(this.feedback.value);
  }
}
