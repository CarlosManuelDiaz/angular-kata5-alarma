import { Component, OnInit } from '@angular/core';
import { AlarmaService } from '../alarma.service';

@Component({
  selector: 'app-alarma',
  templateUrl: './alarma.component.html',
  styleUrls: ['./alarma.component.scss']
})
export class AlarmaComponent implements OnInit {

  constructor(private alarmaService: AlarmaService) {


  }

  ngOnInit() {
  }
  activarAlarma(valor: number) {
    if (valor > 60) {
      alert('Tiempo máximo 60 segundos' );
    } else {
    this.alarmaService.ponAlarma(valor * 1000).subscribe({
      complete: () => { alert('Ring!!!'); }
    });
  }
}
}
