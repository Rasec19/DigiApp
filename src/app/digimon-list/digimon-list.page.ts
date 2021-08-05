import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-digimon-list',
  templateUrl: './digimon-list.page.html',
  styleUrls: ['./digimon-list.page.scss'],
})
export class DigimonListPage implements OnInit {

  digimons:Array<any> = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://digimon-api.vercel.app/api/digimon')
    .subscribe(res => {
      this.digimons = res
    })
  }

}
