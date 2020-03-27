import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { BrandColorService } from '../services/brand-color.service';
import { BrandColor } from '../model/brand-colors';

@Component({
  selector: 'amp-chosen-color-summary',
  templateUrl: './chosen-color-summary.component.html',
  styleUrls: ['./chosen-color-summary.component.scss']
})
export class ChosenColorSummaryComponent implements OnInit, OnChanges {

  @Input() color: BrandColor;
  @Output() clear: EventEmitter<boolean> = new EventEmitter();
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  animation: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.animation = null;
    setTimeout(() => {
      this.animation = 'pulse';
    }, 1);
  }

  signalDelete() {
    this.clear.emit(true);
  }

}
