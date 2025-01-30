import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  menus: any[] = [
    { href: '/', name: 'Home'},
    { href: '#/about', name: 'About'},
    { href: '#/articles', name: 'Articles'},
    { href: '#/projects', name: 'Projects'}
  ];

  constructor() {}

  projectsCount = '20+';
  experienceCount = 10;
  clientsCount = '100+';

  ngOnInit() {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
    });

    this.animateValue(20, this.projectsCount);
    this.animateValue(10, this.experienceCount);
    this.animateValue(120, this.clientsCount);
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

  title = 'my-portfolio';
  projects = [
    {
      title: 'Project One',
      description: 'A modern web application built with Angular and Tailwind.',
      image: 'assets/project1.jpg',
    },
    {
      title: 'Project Two',
      description: 'An interactive portfolio site for showcasing work.',
      image: 'assets/project2.jpg',
    },
    {
      title: 'Project Three',
      description: 'A dynamic e-commerce platform with custom features.',
      image: 'assets/project3.jpg',
    },
  ];

  showLanguageDropdown: boolean = false;

  // Toggle the dropdown visibility
  toggleLanguageDropdown(): void {
    this.showLanguageDropdown = !this.showLanguageDropdown;
  }

  // Change the selected language
  setLanguage(lang: string): void {
    this.language = lang;
    this.showLanguageDropdown = false;

    // Add any localization logic here
    console.log(`Language switched to: ${lang}`);
  }

  travelImages = [
    {
      src: 'https://via.placeholder.com/150?text=Paris',
      caption: 'Paris, France',
      rotation: this.randomRotation(),
      rowOffset: this.randomOffset()
    },
    {
      src: 'https://via.placeholder.com/150?text=Tokyo',
      caption: 'Tokyo, Japan',
      rotation: this.randomRotation(),
      rowOffset: this.randomOffset()
    },
    {
      src: 'https://via.placeholder.com/150?text=NYC',
      caption: 'New York, USA',
      rotation: this.randomRotation(),
      rowOffset: this.randomOffset()
    },
    {
      src: 'https://via.placeholder.com/150?text=Sydney',
      caption: 'Sydney, Australia',
      rotation: this.randomRotation(),
      rowOffset: this.randomOffset()
    },
    {
      src: 'https://via.placeholder.com/150?text=Ulaanbaatar',
      caption: 'Ulaanbaatar, Mongolia',
      rotation: this.randomRotation(),
      rowOffset: this.randomOffset()
    },
    // Add more images if necessary
  ];

  randomRotation(): number {
    return Math.random() * 20 - 10; // Random rotation between -10 and 10 degrees
  }

  randomOffset(): number {
    return Math.random() * 30 - 15; // Random vertical offset between -15px and +15px
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
