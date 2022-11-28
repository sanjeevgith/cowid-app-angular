import { Component } from '@angular/core';
import { CommenService } from './services/commen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdeoproject';



constructor(private commen:CommenService){

}




// dummy="swgswyg";
// deftdfet:any
// finaldata:any
//   btn(){
//     console.log("ewugdefdt")
//     this.commen.fakedata(this.dummy).subscribe(responseList=>{
//       this.finaldata=responseList;
//       console.log(this.finaldata)

//     })
//   }



}
