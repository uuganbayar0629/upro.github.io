import {Component} from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css' +
  '']
})
export class TechStackComponent {
  technologies = [
    { name: 'Angular', logo: 'assets/techs/angular.png' },
    { name: 'React', logo: 'assets/techs/react.png' },
    { name: 'Next.js', logo: 'assets/techs/nextjs.png' },
    { name: 'PrimeNG', logo: 'assets/techs/primeng.png' },
    { name: 'Ant Design', logo: 'assets/techs/ant.png' },
    { name: 'Tailwind', logo: 'assets/techs/tailwind.png' },
    { name: 'Spring Boot', logo: 'assets/techs/springboot.png' },
    { name: 'Java', logo: 'assets/techs/java.png' },
    // { name: 'Node.js', logo: 'assets/techs/nodejs.png' },
    { name: 'Docker', logo: 'assets/techs/docker.png' },
    { name: 'MySQL', logo: 'assets/techs/mysql.png' },
    { name: 'MongoDB', logo: 'assets/techs/mongodb.png' },
    { name: 'Redis', logo: 'assets/techs/redis.png' },
    { name: 'Oracle', logo: 'assets/techs/oracle.png' },
  ];
}
