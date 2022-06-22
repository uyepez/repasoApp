import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  latitude: Number = 0;
  longitude: Number = 0;
  geolocalizacion: any;
  image: any;

  constructor( private sanitizer: DomSanitizer ) {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('objeto coordenadas', coordinates );
    this.geolocalizacion = coordinates;
    this.latitude = this.geolocalizacion.coords.latitude;
    this.longitude = this.geolocalizacion.coords.longitude;   
  }

  async openBrowser(){
    await Browser.open({ url: 'http://capacitorjs.com/' });
  }

  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });

    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpeg;base64,${image.base64String}`)

    console.log(image);   

  }


}
