import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comics: Comic[] = [];

  term: string;

  issueNumber: string = 'issueNumber';

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.getComics().subscribe(
      (data: any) => {
        this.comics = data.data.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
