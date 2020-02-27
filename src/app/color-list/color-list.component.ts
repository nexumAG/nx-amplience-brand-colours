import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { BrandColors, BrandColor } from '../model/brand-colors';

@Component({
  selector: 'amp-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss']
})
export class ColorListComponent implements OnInit, OnDestroy {

  @Input() colors: BrandColors;
  @Input() selectedColor: BrandColor;
  @Output() selection: EventEmitter<BrandColor> = new EventEmitter();
  @ViewChild('list', { static: true }) list: ElementRef<HTMLDivElement>;
  containerHeight = '0px';
  hoverColor: BrandColor;
  expanded = false;

  private listener: (ev: UIEvent) => void;

  constructor() { }

  ngOnInit() {
    this.listener = this.windowResized.bind(this);
    window.addEventListener('resize', this.listener);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.listener);
  }

  windowResized(event: UIEvent) {
    this.containerHeight = (this.expanded ? this.list.nativeElement.clientHeight : 0) + 'px';
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

  toggleExpand() {
    this.expanded = !this.expanded;

    this.containerHeight = (this.expanded ? this.list.nativeElement.clientHeight : 0) + 'px';
  }

  calculateMaxWidth() {
    if (!this.colors.perRow) {
      return null;
    }
    return this.colors.perRow * (this.colors.compact ? 38 : 60) + 'px';
  }

}
