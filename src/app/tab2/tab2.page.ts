import { Component, OnInit } from '@angular/core';
 import { CrudService } from './../services/crud.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
 
  contactos: any;
  nombre: string;
  apellido: string;
  telefono: number;
  telefonocorto: number;
  correo: string;
  lugar :string;
  items: any;
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit() {
    this.crudService.read_Students().subscribe(data => {
 
      this.contactos = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          nombre: e.payload.doc.data()['Nombre'],
          apellido: e.payload.doc.data()['Apellido'],
          telefono: e.payload.doc.data()['Telefono'],
          telefonocorto: e.payload.doc.data()['Telefono Corto'],
          correo: e.payload.doc.data()['Correo'],
          lugar: e.payload.doc.data()['Lugar'],
        };
      })
      console.log(this.contactos);
 
    });
  }
 
  CreateRecord() {
    let record = {};
    record['Nombre'] = this.nombre;
    record['Apellido'] = this.apellido;
    record['Telefono'] = this.telefono;
    record['Telefono Corto'] = this.telefonocorto;
    record['Correo'] = this.correo;
    record['Lugar'] = this.lugar;
    this.crudService.create_NewStudent(record).then(resp => {
      this.nombre = "";
      this.apellido = "";
      this.telefono = undefined;
      this.telefonocorto = undefined;
      this.correo = "";
      this.lugar = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
  RemoveRecord(rowID) {
    this.crudService.delete_Student(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditNombre = record.nombre;
    record.EditApellido = record.apellido;
    record.EditTelefono = record.telefono;
    record.EditTelefonocorto = record.telefonocorto;
    record.EditCorreo = record.correo;
    record.EditLugar = record.lugar;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['Nombre'] = recordRow.EditNombre;
    record['Apellido'] = recordRow.EditApellido;
    record['Telefono'] = recordRow.EditTelefono;
    record['Telefono Corto'] = recordRow.EditTelefonocorto;
    record['Correo'] = recordRow.EditCorreo;
    record['Lugar'] = recordRow.EditLugar;
    this.crudService.update_Student(recordRow.id, record);
    recordRow.isEdit = false;
  }
 
  getItems(){

  }
  
 
}{}
