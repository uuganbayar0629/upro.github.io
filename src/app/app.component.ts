import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  menus: any[] = [
    { href: '', name: 'About'},
    { href: '', name: 'Articles'},
    { href: '', name: 'Projects'},
    { href: '', name: 'Tech'},
  ];

  works: any[] = [
    { name: 'Upwork', tooltip : 'Upwork platform', role: 'Fullstack Developer', beginYear: '2025', endYear: 'Present', logo: 'assets/profile.jpg' },
    { name: 'AshidCapital LLC', tooltip : 'Ашид капитал ББСБ', role: 'Head of IT department', beginYear: '2023', endYear: '2025', logo: 'assets/profile.jpg' },
    { name: 'ITC', tooltip : 'Гааль, татвар, санхүүгийн мэдээллийн технологийн төв', role: 'IT Manager', beginYear: '2021', endYear: '2023', logo: 'assets/profile.jpg' },
    { name: 'ITC', tooltip : 'Гааль, татвар, санхүүгийн мэдээллийн технологийн төв', role: 'Senior Developer', beginYear: '2019', endYear: '2021', logo: 'assets/profile.jpg' },
    { name: 'Interactive BI LLC', tooltip : 'Интерактив Би Ай ХХК', role: 'Developer', beginYear: '2015', endYear: '2019', logo: 'assets/profile.jpg' },
  ];


  articles: any[] = [
    {
      title: 'ERP систем хөгжүүлэгчийн давуу тал юу вэ',
      time: 'September 5, 2022',
      text: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.'
    },
    {
      title: '4k+ байгууллага ажилладаг цалингийн систем хийсэн түүх',
      time: 'September 5, 2022',
      text: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.'
    },
    {
      title: 'Монголын бүх хүнд 300k хэрхэн олгосон бэ',
      time: 'September 5, 2022',
      text: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.'
    }
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
