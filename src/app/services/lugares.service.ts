import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database";
import {Http, Headers} from "@angular/http";

//map antes lo tenia rxjs

@Injectable()
export class LugaresService{

    API_ENDPOINT = 'https://mapsproject-9dfcb.firebaseio.com';

    lugares:any = [
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia'},
        {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita'},
        {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices'},
        {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre:'Sushi Suhiroll'},
        {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia'},
        {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo'},
    ];

   constructor(private afDB:AngularFireDatabase,private http: Http){}
   
    public getLugares(){
      
        //return this.afDB.list('lugares/');
        //ahora con tipoget
        //return this.http.get(this.API_ENDPOINT+'/lugares.json');
          
      return this.http.get(this.API_ENDPOINT+'/.json')  //para traer todo lo dela  bsase de datos lugares etc..
       .map((resultado)=>{
                const data = resultado.json().lugares;
                return data;
            })

 }

    public getLugaresMock(){
        return this.lugares;
    }
    public buscarLugar(id){
        return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
    }
    public guardarLugar(lugar){
        //console.log(lugar);
        //lugar.id = Date.now();
        //this.lugares.push(lugar);
        
        
        //this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
        //this.afDB.list('lugares').push(lugar);
        const headers = new Headers({"Content-Type":"application/json"});
        return this.http.post(
          this.API_ENDPOINT+'/lugares.json',
          lugar, 
          {headers:headers}
          );   // .subscribe()
    }

        public getLugar(id){
        return this.afDB.object('lugares/'+id);
    }
}