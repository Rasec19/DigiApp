import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-digi-info',
  templateUrl: './digi-info.page.html',
  styleUrls: ['./digi-info.page.scss'],
})
export class DigiInfoPage implements OnInit {

  digiInfoName: string
  digimon=[];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.digiInfoName = this.route.snapshot.paramMap.get('name')
    this.http.get<any>('https://digimon-api.vercel.app/api/digimon/name/' + this.digiInfoName)
    .subscribe(res => this.digimon = res)
  }

}
