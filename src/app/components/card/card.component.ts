import { Component, OnInit, Input } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { Story } from 'src/app/models/story';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() data: any;
  @Input() dataComplete: any[];

  image: string;

  showDescription: boolean = false;

  item: any;

  favorite: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.data.thumbnail != null) {
      this.image = this.data.thumbnail.path + '.' + this.data.thumbnail.extension;
    } else {
      this.image = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
    }
    this.item = null;
  }

  viewDetails(id: number) {
    this.item = this.dataComplete.find(d => d.id == id);
  }

  closeModal() {
    this.item = null;
  }

  changeStatus(data: any) {
    debugger;
    if (!this.favorite) {
      this.favorite = true;
    } else {
      this.favorite = false;
    }
    data.favorite = this.favorite;
  }

}
