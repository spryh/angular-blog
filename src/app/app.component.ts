import { Component } from '@angular/core'

// Target the <app-root> tag in index.html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emoji = ['🎉', '😍', '😜', '👍']
  title = 'app'

  activeEmoji: string
  changeEmoji() {
    this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)]
  }

}
