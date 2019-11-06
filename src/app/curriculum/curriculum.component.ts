import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../curriculum.service';
import { SendMailService } from '../send-mail.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';
import emailjs from 'emailjs-com';

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
  about = 'Engineering Technician with an outstanding quality record of engineering products from design to fabrication.' +
    'Team-oriented and self-directed Engineer with personal integrity and professional ethics.' +
    'Adept at managing projects and resolving issues in software and hardware troubleshooting.' +
    'CompTia Cloud+ certified leveraging cloud business and technical solutions.' +
    'SAP Business suite Specialist and good understanding of many programming languages';

  resume = null;
  message = "";
  url_doc = '../assets/doc/';
  url_doc_pdf = '../assets/doc/cv.pdf';
  headers = new HttpHeaders();
  ipAddress: any;
  ipInfo: any;
  ipAdressInfo: any;
  location: any;
  templateParams: {};

  constructor(private curriculumService: CurriculumService, private mailService: SendMailService, private http: HttpClient, platformLocation: PlatformLocation) {
    this.resume = curriculumService.getResume();

    this.http.get<{ ip: string }>('https://jsonip.com')
      .subscribe(data => {
        //console.log('th data:', data.ip);
        this.ipAddress = data.ip;
        this.getInfoIpAddress(this.ipAddress);
      });

    this.mailService.getIpAddress().subscribe(data => {
      //console.log('ipInfo: ' + data);
      this.ipInfo = data;
    });

    this.location = platformLocation as any;
    //console.log('location:' + (platformLocation as any).location);
    //console.log('href:' + (platformLocation as any).location.href);
    //console.log('origin:' +(platformLocation as any).location.origin);
  }

  ngOnInit() {
  }

  sendMessage(doc) {
    //console.log('visitor\'s ip adress is: ' + this.ipAddress);
    /*
    var templateParams = {
      name: 'Neph',
      notes: 'Someone has download your curriculum!',
      user_ip: 'visitor\'s ip adress is: ' + this.ipAddress,
      user_name: 'nephthali',
      user_email: 'nephthali2017@gmail.com',
      doc: 'Document download: ' + doc,
      website: (this.location).location.origin

    };
    */
    this.templateParams[doc] = doc;

    emailjs.send('nephthali2017_gmail_com', 'alert_template', this.templateParams, 'user_O0EDRectaunaQj1pG7XKZ')
      .then(function (response) {
        //console.log('SUCCESS!', response.status, response.text);
      }, function (err) {
        //console.log('FAILED...', err);
      });
  }

  getInfoIpAddress(ipAddress) {
    return this.http.get<any>('http://ip-api.com/json/' + ipAddress)
      .subscribe(data => {
        this.templateParams = {
          name: 'Neph',
          notes: 'Someone has download your curriculum!',
          user_ip: 'visitor\'s ip adress is: ' + this.ipAddress,
          user_name: 'nephthali',
          user_email: 'nephthali2017@gmail.com',
          website: (this.location).location.origin

        };

        //console.log('IP: ', this.ipAddress);
        //console.log('IP Geo data: ', data);
        this.ipAdressInfo = data;

        for (var key of Object.keys(data)) {
          console.log('Key: ' + key + ', Value: ' + data[key]);
          this.templateParams[key] = data[key];
        }

        console.log('TEMPLATE: ', this.templateParams);
        
      });
  }

  downloadFile(fileName) {

    this.sendMessage(fileName);
    //console.log('iP: ' + this.ipInfo);

    let url = this.url_doc + fileName;
    let headers = new HttpHeaders({
      'Content-Type': 'application/pdf',
      'Accept': 'application/pdf',
    });
    return this.http.get(this.url_doc_pdf, {
      headers: headers,
      responseType: 'blob'
    }).subscribe((res: any) => {
      const pdfUrl = (window.URL || window['webkitURL']).createObjectURL(new Blob([res], { type: 'application/pdf' }));
      //console.log("pdfUrl: " + pdfUrl);
      const anchor = document.createElement('a');
      anchor.href = pdfUrl;
      anchor.setAttribute("download", fileName);
      anchor.click();
    });

  }

  sendEmail(doc): void {
    this.mailService.getDocPath(doc).subscribe(
      (v => {
        //console.log('value: ', v);
        this.url_doc = v;
      }
      ),
      (e => console.log('error: ', e)),
      (() => console.log('the sequence completed!'))
    );
    //alert('value: ' + this.url_doc);
    this.mailService.performGetEx().subscribe((v => console.log('value: ', v)),
      (e => console.log('error: ', e)),
      (() => console.log('the sequence completed!')));;
  }


}
