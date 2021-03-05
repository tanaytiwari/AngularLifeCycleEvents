import { Component, OnChanges,Input, OnInit,SimpleChanges, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  parentName :string;
  parentPower : string;
  message: any;

  constructor(private cd : ChangeDetectorRef){

  }

  @ViewChild(MessageComponent) msgViewChild : MessageComponent;
    ngOnInit() {
        this.message = 'Hello World !';
    }

    // ngAfterViewInit(){
    //   this.msgViewChild.message="test";
    //   this.cd.detectChanges
    // }

    
}
