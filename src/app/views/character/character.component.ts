import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters: Character[] = [];

  term: string;

  name: string = 'name';

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.getCharacters().subscribe(
      (data: any) => {
        this.characters = data.data.results;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
