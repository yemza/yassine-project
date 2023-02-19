import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {
  partiant:any =null;
  patiantid:any =null
    constructor(private activeRouter: ActivatedRoute,private patientService: PatientService){

    }

  ngOnInit(): void {
    this.patiantid = this.activeRouter.snapshot.paramMap.get('id');
    this.show();
  }
  show(){
    this.patientService.show(this.patiantid).subscribe((response:any)=>{
      this.partiant = response;
    });
  }
}
