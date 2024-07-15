import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-grid',
  templateUrl: './home-grid.component.html',
  styleUrls: ['./home-grid.component.scss'],
})
export class HomeGridComponent implements OnInit {
  @ViewChild('grid', { static: true }) grid!: HTMLElement;

  constructor() {}

  ngOnInit() {
    this.initGrid();
  }

  private initGrid() {
    const rows = Array.from(this.grid.children) as HTMLElement[]; 
    rows.map((row) => this.fillRows(row));
  }

  private fillRows(row: HTMLElement) {
    //TODO: Check cells per row
    const cells = 10;

    for (let i = 0; i < cells; i++) {
      row.appendChild(this.createRow());
    }
  }

  private createRow(): HTMLDivElement {
    const cell = new HTMLDivElement();
    cell.textContent = 'CELL';
    return cell;
  }
}
