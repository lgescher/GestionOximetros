import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Aplicacion } from '../model/aplicacion';
import { Punto } from '../model/punto';
import { AplicacionesService } from '../services/aplicaciones.service';

declare var google;

@Component({
  selector: 'app-datosequipo',
  templateUrl: './datosequipo.page.html',
  styleUrls: ['./datosequipo.page.scss'],
})
export class DatosequipoPage implements OnInit {

  private aplicacion = new Aplicacion;
  private marcadores: Array<any> = [];
  
  constructor(private activateRoute: ActivatedRoute,
              private aplicSrv: AplicacionesService,
              private alertController: AlertController,
              private loading: LoadingController) { }

  public async ngOnInit() {
    const loading = await this.loading.create();
    loading.present();
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.aplicSrv.obtenerPorId(paramMap.get("id")).subscribe(datos => {
        this.aplicacion = datos;
        this.generarMapa();
        loading.dismiss();
      });
    });
    
  }

  public async generarAlert(pto: Punto) {
    const cuerpoAlerta = {
      header: "titulo",
      subHeader: "subtitulo", 
      message: "msj ",
      buttons: ["OK"]
    };
    const alerta = await this.alertController.create(cuerpoAlerta);
    await alerta.present();
  }

  public async generarMapa() {

    const divMapa = document.getElementById("mapa");
    const map = new google.maps.Map(divMapa,
      {
        center: {
          lat: this.aplicacion.latitud,
          lng: this.aplicacion.longitud
        },
        zoom: 15
      }
    );
   
  
      this.marcadores.push(new google.maps.Marker({
        position: {
          lat: this.aplicacion.latitud,
          lng: this.aplicacion.longitud
        },
        map: map
      }))
      
    
  }
}
