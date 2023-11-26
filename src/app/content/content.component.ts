import { Component, inject, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { Gallery } from '../gallery';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
 
  gallery: Gallery[];
  popUpImage: string | undefined;
  //Injecting data (importing the housing servie services)
  housingService: HousingService = inject(HousingService);

  constructor() {
    // saving data in the gallery variable
    this.gallery = this.housingService.getAllHousingLocations();
  }
  isImg!: string; // checking if an image is clicked or not
  description!:string;
  // Catching the src of image clicked
  catchTypeSrc(src: string, description: string,isImg:string): void {
    this.popUpImage = src;
    this.description=description;
    this.isImg=isImg;
  }
  // haldeling the popup div existance ( hidden | not )
  @Output() closePopup = new EventEmitter();
    closePopUpHandler(): void {
      this.popUpImage = undefined;
      this.closePopup.emit();
    }
  //
  isVid: boolean = false; // Declare the 'isVid' property

  // haldeling the popup div existance ( hidden | not )
  @Output() closePopupvid = new EventEmitter();
    closePopUpHandlervid(): void {
      this.popUpImage = undefined;
      this.isVid = false; // Reset 'isVid' to false
      this.closePopup.emit();
    }
   nextIm:Gallery | undefined;
   NextImg(id:number){
     this.nextIm = this.gallery.find(element => element.id === id);
   }
//setting videos in gallery to play only first 4s
  
}
