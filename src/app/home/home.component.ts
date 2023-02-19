import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }
  // patiant:any;
  // patiantid:any =null
  //   constructor(private activeRouter: ActivatedRoute,private ajouterPatientService:AjouterPatientService){}
  //   ngOnInit(): void {
  //     this.patiantid = this.activeRouter.snapshot.paramMap.get('id');
  //     this.show();
  //   }
  //   show(){
  //     this.ajouterPatientService.show(this.patiantid).subscribe((response:any)=>{
  //       this.patiant = response;
  //     });
  //   }
}
