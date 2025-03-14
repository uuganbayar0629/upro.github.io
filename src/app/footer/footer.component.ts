import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  email: string = 'uuganbayar.btsogt@gmail.com';
  copied: boolean = false;

  copyToClipboard() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 1500); // Hide after 1.5 sec
    });
  }
}
