import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-to-github',
  templateUrl: './link-to-github.component.html',
  styleUrls: ['./link-to-github.component.css']
})
export class LinkToGithubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToUrlBack(){
    window.location.href = 'https://github.com/sebastiannw/sentiment_analysis_app';
  }

  goToUrlFront(){
    window.location.href= 'https://stackoverflow.com';
  }

}
