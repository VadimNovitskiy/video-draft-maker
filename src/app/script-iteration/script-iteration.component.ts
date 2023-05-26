import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
import { VideoFile, VideoService } from './video.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-script-iteration',
  templateUrl: './script-iteration.component.html',
  styleUrls: ['./script-iteration.component.scss']
})
export class ScriptIterationComponent {
  data: any = [{
    "parentName": "Parent One",
    "childProperties":
      [
        { "propertyName": "Property One" },
        { "propertyName": "Property Two" }
      ]
  }, {
    "parentName": "Parent Two",
    "childProperties":
      [
        { "propertyName": "Property Three" },
        { "propertyName": "Property Four" },
        { "propertyName": "Property Five" },
      ]
  }, {
    "parentName": "Parent Three",
    "childProperties":
      [
        { "propertyName": "Property Six" },
        { "propertyName": "Property Seven" },
        { "propertyName": "Property Eight" },
      ]
  }];

  termsForAI = '';
  video: Observable<VideoFile | null>;

  @ViewChildren('selected') selectedElements!: QueryList<ElementRef>;

  @HostListener('click', ['$event.target']) onClick(target: HTMLElement) {
    if (target.classList.contains('selected')) { 
      console.log('Element with class selected was clicked');
      this.selectWord(target);
    }
  }

  constructor(private videoService: VideoService) {
    this.video = this.videoService.videos;
  }

  generateResponce() {
    console.log(this.termsForAI);
    if (this.termsForAI) {
      this.videoService.loadVideoData(this.termsForAI).subscribe();
    }
  }

  selectWord(element: HTMLElement) {
    this.selectedElements.forEach(elem => {
      elem.nativeElement.classList.remove('activeWord');
    });

    element.classList.add('activeWord');
    this.termsForAI = element.textContent ?? '';
  }

  toggleAccordian(event: any, index: number) {
    const element = event.target;
    element.classList.toggle("active");
    if (this.data[index].isActive) {
      this.data[index].isActive = false;
    } else {
      this.data[index].isActive = true;
    }
    const panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = 180 + "px";
      // panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}
