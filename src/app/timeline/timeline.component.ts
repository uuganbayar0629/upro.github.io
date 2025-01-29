import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  works: any[] = [
    { name: 'Upwork', tooltip: 'Upwork platform', role: 'Fullstack Developer', beginYear: '2025', endYear: 'Present', logo: 'assets/profile.jpg' },
    { name: 'AshidCapital LLC', tooltip: 'Ашид капитал ББСБ', role: 'Head of IT department', beginYear: '2023', endYear: '2025', logo: 'assets/profile.jpg' },
    { name: 'ITC', tooltip: 'Гааль, татвар, санхүүгийн мэдээллийн технологийн төв', role: 'IT Manager', beginYear: '2021', endYear: '2023', logo: 'assets/profile.jpg' },
    { name: 'ITC', tooltip: 'Гааль, татвар, санхүүгийн мэдээллийн технологийн төв', role: 'Senior Developer', beginYear: '2019', endYear: '2021', logo: 'assets/profile.jpg' },
    { name: 'Interactive BI LLC', tooltip: 'Интерактив Би Ай ХХК', role: 'Developer', beginYear: '2015', endYear: '2019', logo: 'assets/profile.jpg' },
  ];

  screenSize: 'lg' | 'md' | 'sm' = 'lg';

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  checkScreenSize(): void {
    const width = window.innerWidth;
    if (width <= 640) {
      this.screenSize = 'sm';
    } else if (width > 640 && width <= 1024) {
      this.screenSize = 'md';
    } else {
      this.screenSize = 'lg';
    }
  }
}
