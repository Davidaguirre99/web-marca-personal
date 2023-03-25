import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent {
  ngOnInit(){
    document.getElementsByClassName('nav-item').item(0)?.classList.add('current-item');
  }
}
