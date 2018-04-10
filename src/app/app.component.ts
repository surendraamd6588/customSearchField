import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String;
  names:any;
  constructor(){
    this.title = "Interactive Type-ahead Search";
        this.names = ['Ann Liebmann','Ann Summer','Anabelle Samuel','Sam','Natasha','Marry','Zian','karan']
  }
}
