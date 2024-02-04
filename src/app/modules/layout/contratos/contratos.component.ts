import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-contratos',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatPaginatorModule, MatButtonModule,MatInputModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './contratos.component.html',
  styleUrl: './contratos.component.css'
})
export class ContratosComponent {
  displayedColumns: string[] = ['nro', 'propietario', 'propiedad', 'inquilino', 'fecha_inicio', 'fecha_fin', 'monto', 'fecha_alta', 'estado','acciones'];
  data: any[] = [];
  dataSource = new MatTableDataSource<Contrato>([]);
  isLoading: boolean = true;

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
    this.apiService.getAllContract().subscribe(data => {
      this.data = data.map((contrato: Contrato, index: number) => ({
        posicion: index + 1,
        propiedad: contrato.propietario,
        inquilino: contrato.inquilino,
        fecha_inicio: this.formatoFecha(contrato.fecha_inicio),
        fecha_fin: this.formatoFecha(contrato.fecha_fin),
        monto: contrato.monto,
        fecha_alta: this.formatoFecha(contrato.fecha_alta)
      }));
      this.dataSource.data = this.data;
      this.isLoading = false;
    });
  }
  formatoFecha(fecha: string): string {
    const partesFecha = fecha.split('-');
    const fechaFormateada = `${partesFecha[2]}/${partesFecha[1]}/${partesFecha[0]}`;
    return fechaFormateada;
  }
}
export interface Contrato {
  propietario: string;
  propiedad: string;
  inquilino: string;
  fecha_inicio: string;
  fecha_fin: string;
  monto: number;
  fecha_alta: string;
}
