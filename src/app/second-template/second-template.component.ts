import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-template',
  templateUrl: './second-template.component.html',
  styleUrls: ['./second-template.component.css']
})
export class SecondTemplateComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToFirst() {
    this.router.navigate(['first']);
  }

}
