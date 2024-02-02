import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatPaginatorModule, MatButtonModule,MatInputModule, MatMenuModule, MatIconModule],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PropiedadesComponent {
  displayedColumns: string[] = ['nro', 'propietario', 'tipo_propiedad', 'direccion', 'fecha_alta', 'acciones'];
  data: any[] = [];
  dataSource = new MatTableDataSource<Propiedad>([]);

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
    this.apiService.getAllProperty().subscribe(data => {
      this.data = data.map((propiedad: Propiedad, index: number) => ({
        posicion: index + 1,
        propiedad: propiedad.propietario,
        tipo: propiedad.tipo,
        direccion: propiedad.direccion,
        fecha_alta: this.formatoFecha(propiedad.fecha_alta)
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
export interface Propiedad {
  propietario: string;
  tipo: string;
  direccion: string;
  fecha_alta: string;
}

