import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  @ViewChild("mySvg") svg: any;

  defaultViewBox = `0 0 0 0`;
  viewBox = this.defaultViewBox;
  loading = true;

  constructor() {}

  ngAfterViewInit() {
    this.init();
  }

  init() {
    const viewBox = this.getElementById("mygroup").getBBox();
    console.log(viewBox);
    this.viewBox = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;

    if (this.viewBox == this.defaultViewBox) {
      setTimeout(() => {
        this.init();
      }, 100)
    }
  }

  getElementById(id: string) {
    return this.svg.nativeElement.getElementById(id);
  }

}
