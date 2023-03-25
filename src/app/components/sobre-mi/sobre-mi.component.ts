import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent {
  ngOnInit(){
    const items = document.getElementsByClassName('nav-item');
    for (let i=0;i<items.length;i++){
      items.item(i)?.classList.remove('current-item');
    }
    document.getElementsByClassName('nav-item').item(0)?.classList.add('current-item');
  }
}
