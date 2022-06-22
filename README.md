# repasoApp

# Start a new app
ionic start capacitorApp blank --type=angular --capacitor --package-id=com.uriel.course
 
# Build the web part of our app
ionic build
 
# Generate the native platform
npm install @capacitor/android
npx cap add ios/android
npx cap open android

#para mostrar cambios en android
ionic build && npx cap copy
#para ver directo en el dispositivo
ionic cap run android -l --external

 //lista de plugins
 https://ionicacademy.com/using-capacitor-core-plugins/
https://capacitorjs.com/docs/apis



//instalamos PWA elements
npm install @ionic/pwa-elements

//src/main.ts
import { defineCustomElements } from '@ionic/pwa-elements/loader';
 
// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
