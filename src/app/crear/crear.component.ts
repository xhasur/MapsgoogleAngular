import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";
import {ActivatedRoute} from "@angular/router";
@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})
export class CrearComponent {
    id:any = null;
    lugar:any = {};
    constructor(private lugaresService: LugaresService, private route: ActivatedRoute){
        this.id = this.route.snapshot.params['id'];
        if(this.id != 'new'){
            this.lugaresService.getLugar(this.id)
                .valueChanges().subscribe((lugar)=>{
                    this.lugar = lugar;
                });
        }
    }
    guardarLugar(){
                this.lugar.id = Date.now();
                //this.lugaresService.guardarLugar(this.lugar);
                this.lugaresService.guardarLugar(this.lugar).subscribe( e=>console.log, (e)=>console.log(e));
                alert('Negocio guardado con éxito!');
                this.lugar = {};
    }
}