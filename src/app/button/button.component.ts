import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text?: string;
  @Input() class: any;
  @Output() action: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  constructor() { }

  ngOnInit() { }

}
