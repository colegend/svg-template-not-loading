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
    const viewBox = this.getElementById("mygroup").getBBox();
    console.log(viewBox);
    this.viewBox = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
  }

  getElementById(id: string) {
    return this.svg.nativeElement.getElementById(id);
  }

}
