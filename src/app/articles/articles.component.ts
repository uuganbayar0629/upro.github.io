import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles: any[] = [
    {
      title: 'Exploring Angular 18 Features',
      time: '2024-01-29',
      text: 'Discover the new improvements in Angular 18 and how it enhances your development experience.',
      link: '#'
    },
    {
      title: 'Tailwind CSS Best Practices',
      time: '2024-01-28',
      text: 'Learn how to write clean and maintainable Tailwind CSS code for your projects.',
      link: '#'
    },
    {
      title: 'Optimizing Web Performance',
      time: '2024-01-27',
      text: 'Improve your website’s speed and user experience with these optimization techniques.',
      link: '#'
    },
    {
      title: 'Exploring Angular 18 Features',
      time: '2024-01-29',
      text: 'Discover the new improvements in Angular 18 and how it enhances your development experience.',
      link: '#'
    },
    {
      title: 'Tailwind CSS Best Practices',
      time: '2024-01-28',
      text: 'Learn how to write clean and maintainable Tailwind CSS code for your projects.',
      link: '#'
    },
    {
      title: 'Optimizing Web Performance',
      time: '2024-01-27',
      text: 'Improve your website’s speed and user experience with these optimization techniques.',
      link: '#'
    }
  ];
}
