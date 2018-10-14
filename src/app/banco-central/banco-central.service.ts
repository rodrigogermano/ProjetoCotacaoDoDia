import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BancoCentralService {

  constructor(private httpClient: HttpClient) { }

  GetCotacao(codMoeda: string): Observable<any> {
    return this.httpClient.get(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?%40moeda='${codMoeda}'&%40dataCotacao='10-10-2018'&%24format=json&%24select=paridadeCompra,paridadeVenda,cotacaoCompra,cotacaoVenda,dataHoraCotacao,tipoBoletim`)
    .pipe(      
      map(res => {
        return res['value'].find(x => x.tipoBoletim == "Abertura");
      })
    );
  }
}
