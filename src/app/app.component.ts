import { environment } from './../environments/environment';
import { AdalService } from 'adal-angular4';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private adalSvc: AdalService){
    this.adalSvc.init(environment.adalConfig);
  }

  ngOnInit(){
    this.adalSvc.handleWindowCallback();
  }
}
