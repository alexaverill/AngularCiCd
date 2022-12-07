import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @Input() text:string ="";
  @Input() Title:string="";
  @Input() Description:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
