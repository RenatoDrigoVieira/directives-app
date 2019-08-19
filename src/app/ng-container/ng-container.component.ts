import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    {login:"Bob", role:"admin",lastlogin: new Date('02/01/2018')},
    {login:"Lia", role:"user",lastlogin: new Date('02/10/2010')},
    {login:"John", role:"admin",lastlogin: new Date('10/01/2018')},
    {login:"Robin", role:"user",lastlogin: new Date('10/01/2018')}
  ]

  constructor() { }

  ngOnInit() {
  }

}
