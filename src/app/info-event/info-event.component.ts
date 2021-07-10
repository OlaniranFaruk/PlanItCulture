import { Component, OnInit } from '@angular/core';
import { InfoEvent } from '../models.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-info-event',
  templateUrl: './info-event.component.html',
  styleUrls: ['./info-event.component.css']
})
export class InfoEventComponent implements OnInit {

  newinfoevent!: InfoEvent;
  infoevents!: InfoEvent[];
  Toggle!: boolean;

  constructor(private mainservice: MainserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newinfoevent = new InfoEvent();
    this.onGetEvents();

  }

  onGetEvents(): void {
     this.mainservice.getEvents().subscribe(
          (response: InfoEvent[]) => {
            console.log('received events: ', response);
            this.infoevents = response;
        },
        (error) => console.log('error:', error),
        () => console.log('ready!')
     );
  }

  toggleButton(): boolean{
    if (this.newinfoevent.Organizer == ''||this.newinfoevent.Website == ''||this.newinfoevent.AmntTargetGroup == 0||this.newinfoevent.Targetgroup == 0||this.newinfoevent.category == ''||this.newinfoevent.Time == ''||this.newinfoevent.Date == '' || this.newinfoevent.Eventname == '' || this.newinfoevent.description == '' ||this.newinfoevent.Location == ''  ) {
      return true;
    }else{
      return false;
    }

   
  }

  CreateNewEvent():void{
    
      this.mainservice.addEvent(this.newinfoevent).subscribe(
        (response) => {
          console.log('Event added: ', response);
          this.onGetEvents();
                
          this.newinfoevent.Eventname = '';
          this.newinfoevent.description = '';
          this.newinfoevent.Location = '';
          this.newinfoevent.Date = '';
          this.newinfoevent.Time = '';
          this.newinfoevent.category = '';
          this.newinfoevent.Targetgroup = 0;
          this.newinfoevent.AmntTargetGroup = 0;
          this.newinfoevent.Website = '';
          this.newinfoevent.Organizer = '';

          this.Toggle = false;
          setTimeout(()=>{                         
            
            this.router.navigate(['/info-event']);
        }, 1000);
  
        },
        (error) => console.log('error', error)
      )
      
      
    
    
    }

    


   }

  

