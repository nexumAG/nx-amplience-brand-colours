import { Component, OnInit, Input, HostBinding, Host, OnChanges } from '@angular/core';

@Component({
  selector: 'amp-color-preview',
  templateUrl: './color-preview.component.html',
  styleUrls: ['./color-preview.component.scss']
})
export class ColorPreviewComponent implements OnInit, OnChanges {

  @Input() color: string;

  constructor() { }

  ngOnChanges() {
  }

  ngOnInit() {
  }

}
