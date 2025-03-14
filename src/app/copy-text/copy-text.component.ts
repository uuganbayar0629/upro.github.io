import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-copy-text',
  templateUrl: './copy-text.component.html',
  styleUrls: ['./copy-text.component.css']
})
export class CopyTextComponent {
  @Input() textToCopy: string = '';
  copied: boolean = false;

  constructor() {}

  copyToClipboard() {
    navigator.clipboard.writeText(this.textToCopy).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 1500); // Hide after 1.5 sec
    });
  }
}
