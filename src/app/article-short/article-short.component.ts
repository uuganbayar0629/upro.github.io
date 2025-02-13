import { Component } from '@angular/core';

@Component({
  selector: 'app-article-short',
  templateUrl: './article-short.component.html',
  styleUrls: ['./article-short.component.css']
})
export class ArticleShortComponent {
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
    // {
    //   title: 'Монголын бүх хүнд 300k хэрхэн олгосон бэ',
    //   time: 'September 5, 2022',
    //   text: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.'
    // }
  ];
}
