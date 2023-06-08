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

  viewBox = `0 0 0 0`;

  constructor() {}

  ngAfterViewInit() {
    this.svg.nativeElement.addEventListener("load", () => {
      setTimeout(() => {
        console.log("SVG loaded.");
        const viewBox = this.getElementById("mygroup").getBBox();
        console.log(viewBox);
        this.viewBox = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
      }, 0)
    });
  }

  getElementById(id: string) {
    return this.svg.nativeElement.getElementById(id);
  }

}
