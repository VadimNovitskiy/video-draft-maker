import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { VideoFile, VideoService } from './video.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
  videos: Observable<VideoFile[]>;

  pageLoad = false;

  @ViewChildren('selected') selectedElements!: QueryList<ElementRef>;

  @HostListener('click', ['$event.target']) onClick(target: HTMLElement) {
    if (target.classList.contains('selected')) { 
      console.log('Element with class selected was clicked');
      this.selectWord(target);
    }
  }

  constructor(private videoService: VideoService, private elem: ElementRef) {
    this.videos = this.videoService.videos;
  }

  generateResponce() {
    console.log(this.termsForAI);
    if (this.termsForAI) {
      this.videoService.loadVideoData(this.termsForAI).subscribe();
    }
  }

  selectWord(element: HTMLElement) {
    this.clearActiveClass();

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

  clearActiveClass() {
    this.selectedElements.forEach(elem => {
      elem.nativeElement.classList.remove('activeWord');
    });
  }

  next() {
    const arrayOfSelectedElement = this.selectedElements.toArray();
    const currentIndex = arrayOfSelectedElement.findIndex(elem => elem.nativeElement.classList.contains('activeWord'));

    if (currentIndex !== -1 && currentIndex < arrayOfSelectedElement.length -1) {
      this.clearActiveClass();
      const nextActiveElement = arrayOfSelectedElement[currentIndex + 1];

      nextActiveElement.nativeElement.classList.add('activeWord');
      this.termsForAI = nextActiveElement.nativeElement.textContent ?? '';
    }
  }

  before() {
    const arrayOfSelectedElement = this.selectedElements.toArray();
    const currentIndex = arrayOfSelectedElement.findIndex(elem => elem.nativeElement.classList.contains('activeWord'));

    if (currentIndex !== -1 && currentIndex !== 0) {
      this.clearActiveClass();
      const nextActiveElement = arrayOfSelectedElement[currentIndex - 1];

      nextActiveElement.nativeElement.classList.add('activeWord');
      this.termsForAI = nextActiveElement.nativeElement.textContent ?? '';
    }
  }

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
      // this.router.navigate(['/keywords']);
    }
  }

  ngOnInit(): void {
    window.scrollTo(0, 1);

    setTimeout(() => {
      this.pageLoad = true;
    }, 500);
  }
}
