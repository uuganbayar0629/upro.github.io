import {Component, OnInit} from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  menus: any[] = [
    { href: 'home', name: 'Home'},
    { href: 'about', name: 'About'},
    { href: 'projects', name: 'Projects'},
    { href: 'articles', name: 'Articles'}
  ];

  constructor() {
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
    });

    // this.animateValue(20, this.projectsCount);
    // this.animateValue(10, this.experienceCount);
    // this.animateValue(120, this.clientsCount);
  }

  isDarkMode = false;
  language: any = 'en';
  modeImgSrc: any = 'assets/modes/light.png';

  // Toggle dark/light mode
  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const htmlElement = document.documentElement;
    if (this.isDarkMode) {
      htmlElement.classList.add('dark');
      this.modeImgSrc = 'assets/modes/dark.png';
    } else {
      htmlElement.classList.remove('dark');
      this.modeImgSrc = 'assets/modes/light.png';
    }
  }

  // Change language (customize this for localization)
  changeLanguage(language: any): void {
    console.log('Language changed to:', this.language);
    // Implement your localization logic here
  }

  animateValue(finalValue: number, property: any, duration: number = 2000): void {
    const step = (timestamp: number, startTimestamp: number) => {
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      property = Math.floor(progress * finalValue);
      if (progress < 1) {
        requestAnimationFrame((timestamp) => step(timestamp, startTimestamp));
      }
    };
    requestAnimationFrame((timestamp) => step(timestamp, performance.now()));
  }
}
