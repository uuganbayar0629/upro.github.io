import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // payroll.gov.mn, -> ACH Mongol bankniii guilgeenii, HR- TAZ Info, XYP integration
  // mof-transaction,
  // lm.mof.gov.mn,
  // multi-currency.mof.gov.mn
  // vis-health.gov.mn,
  // ehalamj.mn,
  // 300k, 50k vaccination bonus
  // esu finance loan application
  //  - Mobile App
  //  - Employee portal -> Angular / Bank Gateway integration/
  // simple platform ->
  //  - Simple app,
  //  - Employee portal New /Next.js/,
  //  - Employee portal Old /Odoo ERP/,
  //  - DMS Api /Spring boot/,
  //  - Finacle API integration /Spring boot/,
  //  - CSS api integration CREPASS /Spring boot/
  //  - Auto teever API
  //  - Burenscore, Sainscore, Mongolbank API
  //  - XYP, DAN
  // https://iltod.mof.gov.mn/
  // https://bps.mof.gov.mn/
  //
  achievement : any = { projectsCount : 20 };

  works: any[] = [
    { name: 'Upwork', tooltip : 'Upwork platform', role: 'SEO | Fullstack Developer', beginYear: '2025', endYear: 'Present', logo: 'assets/profile.jpg' },
    { name: 'AshidCapital LLC', tooltip : 'Ашид капитал ББСБ', role: 'Head of IT department', beginYear: '2023', endYear: '2025', logo: 'assets/profile.jpg' },
    { name: 'ITC', tooltip : 'Гааль, татвар, санхүүгийн мэдээллийн технологийн төв', role: 'IT Manager', beginYear: '2021', endYear: '2023', logo: 'assets/profile.jpg' },
    { name: 'ITC', tooltip : 'Гааль, татвар, санхүүгийн мэдээллийн технологийн төв', role: 'Senior Developer', beginYear: '2019', endYear: '2021', logo: 'assets/profile.jpg' },
    { name: 'Interactive BI LLC', tooltip : 'Интерактив Би Ай ХХК', role: 'Developer', beginYear: '2015', endYear: '2019', logo: 'assets/profile.jpg' },
  ];



}
