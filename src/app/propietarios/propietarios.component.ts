import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-propietarios',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatPaginatorModule, MatButtonModule,MatInputModule, MatMenuModule, MatIconModule],
  templateUrl: './propietarios.component.html',
  styleUrl: './propietarios.component.css'
})

export class PropietariosComponent {
  displayedColumns: string[] = ['nro', 'nombre', 'apellido', 'dni', 'fecha_alta', 'acciones'];
  data: any[] = [];
  dataSource = new MatTableDataSource<Propietario>([]);

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
    this.apiService.getAllOwner().subscribe(data => {
      this.data = data.map((propietario: Propietario, index: number) => ({
        posicion: index + 1,
        nombre: propietario.nombre,
        apellido: propietario.apellido,
        dni: propietario.dni,
        fecha_alta: this.formatoFecha(propietario.fecha_alta)
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
export interface Propietario {
  posicion: number;
  nombre: string;
  apellido: string;
  dni: string;
  fecha_alta: string;
}
