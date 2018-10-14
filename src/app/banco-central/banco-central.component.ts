import { Component, OnInit } from '@angular/core';
import { BancoCentralService } from './banco-central.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-banco-central',
  templateUrl: './banco-central.component.html',
  styleUrls: ['./banco-central.component.css']
})
export class BancoCentralComponent implements OnInit {

  Dolar: Observable<any>;
  Euro: Observable<any>;
  Libra: Observable<any>;
  Iene: Observable<any>;

  constructor(private API: BancoCentralService) { 
    this.Dolar = this.API.GetCotacao('USD');
    this.Euro = this.API.GetCotacao('EUR');
    this.Libra = this.API.GetCotacao('GBP');
    this.Iene = this.API.GetCotacao('JPY');
  }

  ngOnInit() {
    
  }

}
