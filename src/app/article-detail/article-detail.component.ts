import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {
  article = {
    title: 'Angular and Tailwind CSS: Building Responsive UIs',
    description:
      'Learn how to integrate Tailwind CSS into your Angular applications and build modern, responsive user interfaces.',
    image:
      'https://images.unsplash.com/photo-1614795304185-5d9980036348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGFuZ3VsYXJ8ZW58MHx8fHwxNjc5MTU1MjY5&ixlib=rb-1.2.1&q=80&w=1080',
    imageDescription:
      'A modern workspace showcasing the power of Angular and Tailwind CSS.',
    summary:
      'This article walks you through the process of integrating Tailwind CSS into your Angular project, ensuring a beautiful and responsive UI for your web application.',
  };

  constructor(private router: Router) {}

  // Function to go back to the list
  goBack() {
    this.router.navigate(['/article-list']);
  }
}
