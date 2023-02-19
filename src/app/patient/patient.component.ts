import { Component,OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientList:any =[];
  constructor(private patientService :PatientService){
  }
  ngOnInit(): void {
    this.getPatient()
  }


  getPatient(){
    this.patientService.getPatient().subscribe((resu:any)=>{
      this.patientList=resu;
  })
  }

}
