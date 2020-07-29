import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable({
//if there is nothing we have to declare the service in app.module.ts->providers section
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message:string){

    alertify.success(message +" added to cart")

  }

}
