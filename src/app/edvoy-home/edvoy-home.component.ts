import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edvoy-home',
  templateUrl: './edvoy-home.component.html',
  styleUrls: ['./edvoy-home.component.css'],
})
export class EdvoyHomeComponent implements OnInit {
  StudyImage =
    'https://cdn.edvoy.com/static/mastheads/desktop/study-abroad-program.jpg';
  constructor() {}

  ngOnInit(): void {}
}
