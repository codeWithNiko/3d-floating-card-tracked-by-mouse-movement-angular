import { Component,ViewChild,ElementRef,Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private renderer:Renderer2){}
  @ViewChild('card') card: ElementRef; 
  onMouseMove(event) {
    let x = -(window.screen.width/2 - event.screenX) / 10;
    let y = (window.screen.height/2 - event.screenY) / 7;
    this.renderer.setStyle(this.card.nativeElement,'transform',`rotateY(${x}deg) rotateX(${y}deg)`);
  }
}
