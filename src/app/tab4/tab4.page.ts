import { Component, OnInit } from '@angular/core';
 import { CrudService } from './../services/crud.service';
 import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {
 
  contactos: any;
  nombre: string;
  apellido: string;
  telefono: number;
  telefonocorto: number;
  correo: string;
  lugar :string;
  foto:string;
 
  constructor(private crudService: CrudService, public toastController: ToastController) { }
 
  ngOnInit() {
    this.foto="/assets/mapa.PNG";
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
      this.foto="/assets/mapa.PNG";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
      this.alerta();
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
 
  Cambiarfoto(sitio){
console.log(sitio);
if(sitio=="Getafe"){
  this.foto="/assets/mapamadrid.PNG";
};
if(sitio=="Illescas"){
  this.foto="/assets/mapamadrid.PNG";
};
if(sitio=="Sevilla"){
  this.foto="/assets/mapasevilla.PNG";
};
if(sitio=="Toulouse"){
  this.foto="/assets/mapato.PNG";
};
if(sitio=="Hamburgo"){
  this.foto="/assets/mapaham.PNG";
};
  };

  async alerta() {
    const toast = await this.toastController.create({
      message: 'Contacto Registrado!',
      position: 'top',
      color: 'success',
      duration: 1500
    });
    toast.present();
  }

}{}
