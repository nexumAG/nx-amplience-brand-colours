import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrandColors, BrandColor } from '../model/brand-colors';

@Component({
  selector: 'amp-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss']
})
export class ColorListComponent implements OnInit {

  @Input('colors') colors: BrandColors;
  @Input() selectedColor: BrandColor;
  @Output() selection: EventEmitter<BrandColor> = new EventEmitter();
  hoverColor: BrandColor;


  constructor() { }

  ngOnInit() {
  }

  setHover(color: BrandColor) {
    this.hoverColor = color;
  }

  isHover(color: BrandColor): boolean {
    return color === this.hoverColor || color === this.selectedColor;
  }

  isSelected(color: BrandColor): boolean {
    return color === this.selectedColor;
  }

  selectColor(color: BrandColor) {
    this.selection.emit(color);
  }

}
