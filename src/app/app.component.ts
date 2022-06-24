import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_html';
  constructor(private viewContainerRef: ViewContainerRef, private cfr: ComponentFactoryResolver){
    
  }
}
