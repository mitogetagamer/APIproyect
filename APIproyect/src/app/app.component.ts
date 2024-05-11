import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {DataService} from "./services/data.service"


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  dataservice = inject(DataService);
  
  Losdatos:any[] = [];

  obtenertodoslosdatos(){
    this.dataservice.obtenerDatos().subscribe((answer:any)=>{
      console.log("ans: ", answer);
      if (answer.data
      ) {
        this.Losdatos = answer.data

        console.log("buena taiger")
      } else {
        console.log("suaveee")
      }
      this.Losdatos = answer.data

    })
  }
 ngOnInit(){this.obtenertodoslosdatos();}
}

