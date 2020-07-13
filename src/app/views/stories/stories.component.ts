import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/models/story';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  stories: Story[] = [];

  term: string;

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.getStories().subscribe(
      (data: any) => {
        this.stories = data.data.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
