import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shrtcode-child',
  templateUrl: './shrtcode-child.component.html',
  styleUrls: ['./shrtcode-child.component.css']
})
export class ShrtcodeChildComponent implements OnInit {
  @Input() shrtcode: any= ''  // decorate the property with @Input()

  ngOnInit() {
  }
}
