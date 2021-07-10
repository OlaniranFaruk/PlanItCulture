import { Component, OnInit } from '@angular/core';
import { Contact, InfoEvent } from '../models.model';
import { MainserviceService } from '../mainservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-pagina',
  templateUrl: './contact-pagina.component.html',
  styleUrls: ['./contact-pagina.component.css']
})
export class ContactPaginaComponent implements OnInit {

  contacts!: Contact[];
  events!: InfoEvent[];
  eventAmnt!: number;
  eventId!: number[];
  newcontact!: Contact;

  constructor(private mainservice: MainserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newcontact = new Contact();
    
    this.onGetContacts();
    this.onGetEvents();
    
    
  }
  CreateNewContact():void{
    
    this.mainservice.addContact(this.newcontact).subscribe(
      (response) => {
        console.log('Contact added: ', response);
        this.onGetContacts();
        this.newcontact.Name= '';
        this.newcontact.Organisation = '';
        this.newcontact.Email = '';
        this.newcontact.EventId = 0; 
        this.newcontact.Function = '';
        this.newcontact.GSM = '';
        
        setTimeout(()=>{                         
          
          this.router.navigate(['/contact']);
      }, 1000);

      },
      (error) => console.log('error', error)
    )
    
    
  
  
  }


  toggleButton(): boolean{
    if (this.newcontact.Name== '' ||this.newcontact.Organisation == '' || this.newcontact.Email == '' || this.newcontact.EventId == 0 || this.newcontact.Function == '' || this.newcontact.GSM == '') {
      return true;
    }else{
      return false;
    }
  }

  selectAnEvent(): boolean {
    if (this.newcontact.EventId == 0) {
      return true;
    }else{
      return false;
    }
  }

  onGetContacts(): void {
    this.mainservice.getContacts().subscribe(
      (response: Contact[]) => {
        console.log('received contacts: ', response);
        this.contacts = response;
        
    },
    (error: any) => console.log('error:', error),
    () => console.log('ready!')
 );
  }

  
  onGetEvents(): void {
    this.mainservice.getEvents().subscribe(
         (response: InfoEvent[]) => {
           console.log('received events: ', response);
           this.events = response;
       },
       (error) => console.log('error:', error),
       () => console.log('ready!')
    );
 }

}
