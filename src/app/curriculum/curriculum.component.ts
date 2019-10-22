import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../curriculum.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  firstname = 'Nephthali';
  lastname = 'Djabon';
  address = {
    street: 'via Magnanelli 6/3',
    postalcode: '40033',
    city: 'Casalecchio di Reno, Bologna',
    country: 'Italy',
    phone: '(+39)051/6171646'
  }
  email = 'nephthali2017@gmail.com';
  about = 'Engineering Technician with an outstanding quality record of engineering products from design to fabrication.'+
          'Team-oriented and self-directed Engineer with personal integrity and professional ethics.'+
          'Adept at managing projects and resolving issues in software and hardware troubleshooting.'+
          'CompTia Cloud+ certified leveraging cloud business and technical solutions.'+
          'SAP Business suite Specialist and good understanding of many programming languages';

  resume = null;

  constructor(private curriculumService: CurriculumService) { 
    this.resume = curriculumService.getResume();
  }

  ngOnInit() {
  }

  downloadPdf(){
    alert("want to download pdf?");
  }

  downloadWord(){
    alert("want to download word?");
  }

}
