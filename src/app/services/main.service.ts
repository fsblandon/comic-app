import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';
import { Observable } from 'rxjs';

import { Md5 } from 'ts-md5/dist/md5';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  basicUrl: string = "http://gateway.marvel.com/v1/public/";

  publicKey: string = "a3f34bb6f26378b51127840548445b8c";

  privateKey: string = "54116b23f5079a205ddeeb0c5f1b9a9dc65bd6f9"

  ts: string = new Date().getTime().toString();

  //API: string = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150";\\

  hash: any;

  constructor(
    private http: HttpClient
  ) {
    const md5 = new Md5();
    this.hash = md5.appendStr(this.ts+this.privateKey+this.publicKey).end();
  }

  getCharacters(): Observable<Object> {
    const request =  this.http.get<Object>(
      this.basicUrl + 'characters?ts=' + this.ts + '&apikey=' + this.publicKey + '&hash=' + this.hash
    );
    return request;
  }

  getComics(): Observable<Object> {
    const request = this.http.get<Object>(
      this.basicUrl + 'comics?ts=' + this.ts + '&apikey=' + this.publicKey + '&hash=' + this.hash
    );
    return request;
  }

  getStories(): Observable<Object> {
    const request = this.http.get<Object>(
      this.basicUrl + 'stories?ts=' + this.ts + '&apikey=' + this.publicKey + '&hash=' + this.hash
    );
    return request;
  }
}
