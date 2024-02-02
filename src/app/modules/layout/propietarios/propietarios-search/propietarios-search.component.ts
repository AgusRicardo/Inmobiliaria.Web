import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from '../../../../service/api.service';

export interface PropietarioSeleccionado {
  id: number;
  name: string;
  apellido: string;
  DNI: string;
}

@Component({
  selector: 'app-propietarios-search',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './propietarios-search.component.html',
  styleUrl: './propietarios-search.component.css'
})

export class PropietariosSearchComponent implements OnInit, OnChanges {
  @Input() searchTerm: string = '';
  displayedColumns: string[] = ['nombre', 'apellido', 'DNI'];
  dataSource: MatTableDataSource<PropietarioSeleccionado>;
  propietarios: any[] = [];
  selectedRow: any;

  constructor(private apiService: ApiService, private router: Router) {
    this.dataSource = new MatTableDataSource(this.propietarios);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      this.searchPropietario();
    }
  }

  searchPropietario() {
    console.log('searchPropietario', this.searchTerm);

    this.apiService.searchPropietario(this.searchTerm)
      .subscribe(response => {
        this.propietarios = response;
        console.log(response);
        this.dataSource.data = this.propietarios;
      }, error => {
        console.error(error);
      });
  }

  onRowClick(row: any) {
    this.selectedRow = row;
  }
}
