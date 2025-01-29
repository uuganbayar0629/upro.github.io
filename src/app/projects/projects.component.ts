import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any[] = [
    {
      title: 'Planetaria',
      description: 'Creating technology to empower civilians to explore space on their own terms.',
      link: 'https://planetaria.tech',
      linkText: 'planetaria.tech',
      techIcons: ['assets/icons/angular.svg', 'assets/icons/spring.svg', 'assets/icons/mysql.svg']
    },
    {
      title: 'Animaginary',
      description: 'High-performance web animation library, hand-written in optimized WASM.',
      link: 'https://github.com',
      linkText: 'github.com',
      techIcons: ['assets/icons/typescript.svg', 'assets/icons/webassembly.svg']
    },
    {
      title: 'HelioStream',
      description: 'Real-time video streaming library, optimized for interstellar transmission.',
      link: 'https://github.com',
      linkText: 'github.com',
      techIcons: ['assets/icons/react.svg', 'assets/icons/nodejs.svg']
    },
    {
      title: 'cosmOS',
      description: 'The operating system that powers our Planetaria space shuttles.',
      link: '',
      linkText: '',
      techIcons: ['assets/icons/linux.svg', 'assets/icons/cpp.svg']
    },
    {
      title: 'OpenShuttle',
      description: 'The schematics for the first rocket I designed that successfully made it to orbit.',
      link: '',
      linkText: '',
      techIcons: ['assets/icons/python.svg', 'assets/icons/docker.svg']
    }
  ];
}
