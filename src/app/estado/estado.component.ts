import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../services/estado.service';
import { EstadoList } from '../models/list.estado.model';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  private estadoList: EstadoList[] = [];

  constructor(private estadoService: EstadoService) { }

  ngOnInit() {

  }

  public loadEstados() {
      this.estadoService.getAll().subscribe(response => this.estadoList = response);
  }

}
