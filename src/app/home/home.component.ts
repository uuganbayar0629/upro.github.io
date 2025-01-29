import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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

}
