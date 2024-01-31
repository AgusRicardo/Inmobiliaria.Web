import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-inquilinos',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatPaginatorModule, MatButtonModule,MatInputModule, MatMenuModule, MatIconModule],
  templateUrl: './inquilinos.component.html',
  styleUrl: './inquilinos.component.css'
})


export class InquilinosComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<Persona>([]);
  data: any[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol' , 'fecha_alta', 'acciones'];

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  constructor(private apiService: ApiService, private router: Router) {}

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getAllTenants().subscribe(data => {
      this.data = data.map((persona: Persona, index: number) => ({
        posicion: index + 1,
        nombre: persona.nombre,
        apellido: persona.apellido,
        dni: persona.dni,
        fecha_alta: this.formatoFecha(persona.fecha_alta)
      }));
      this.dataSource.data = this.data;
    });
  }
  formatoFecha(fecha: string): string {
    const partesFecha = fecha.split('-');
    const fechaFormateada = `${partesFecha[2]}/${partesFecha[1]}/${partesFecha[0]}`;
    return fechaFormateada;
  }
}

export interface Persona {
  posicion: number;
  nombre: string;
  apellido: string;
  dni: string;
  fecha_alta: string;
}




