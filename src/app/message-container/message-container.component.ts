import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.css']
})
export class MessageContainerComponent implements AfterContentInit {
  greetMessage = 'Ignite UI Rocks!';
  constructor() { }
 @ContentChild(MessageComponent) msgChildComponentContent : MessageComponent;
  ngAfterContentInit(){
    this.msgChildComponentContent.message="Changed inside AfterContent";
  }
}
