import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  currentSection: BehaviorSubject<string> = new BehaviorSubject('home');

  sections: string[] = ['home', 'about', 'projects', 'contact'];

  constructor(@Inject(DOCUMENT) private document: Document) {
    document.addEventListener('wheel', () => {
      this.keepTrack();
    })
  }

  keepTrack() {
    const viewHeight = window.innerHeight;
    for (var section of this.sections) {
      const element = document.getElementById(section);
      if (element != null) {
        const rect = element.getBoundingClientRect();
        console.log(rect);
        if ((rect.top < viewHeight / 2)) {
          this.currentSection.next(section);
        } 
      } else {
      }
    }
  }
}