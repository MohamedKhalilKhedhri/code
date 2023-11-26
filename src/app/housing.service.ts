import { Injectable } from '@angular/core';
import { Gallery } from './gallery';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  gallerie: any;

  constructor() { }

  gallery : Gallery[] =[
    { id:1,lecture:"img",
      type:"anime",
      url:"https://imgs.search.brave.com/BstPU6Dq_wibOg9D0wx17QbN-ZkjkhS7JnkP6-TNxUg/rs:fit:860:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMS9OYXJ1/dG8tSW1hZ2VzLmpw/Zw",
      decription:"Boruto The Biggest Son of naruto and The biggest Regret Too screw you kishimoto"
    }
,
    { id:2,lecture:"img",
      type:"car",
      url:"https://toyotacanada.scene7.com/is/image/toyotacanada/MY24_GR_Supra_45th_Anniv_Ed_003?ts=1689122739156&$Media-Large$&dpr=off",
      decription:"Hello Cops , Hello mam , I hear Shots , How , Ratatatatatata , supra"
    }
,
    { id:3,lecture:"img",
      type:"people",
      url:"https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
      decription:"Dond dell me what do do : India sage"
    },
    { id:4,lecture:"img",
      type:"people",
      url:"https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
      decription:"Dond dell me what do do : India sage"
    }, { id:5,lecture:"img",
      type:"people",
      url:"https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
      decription:"Dond dell me what do do : India sage"
    },
    { id:6,lecture:"img",
      type:"car",
      url:"https://toyotacanada.scene7.com/is/image/toyotacanada/MY24_GR_Supra_45th_Anniv_Ed_003?ts=1689122739156&$Media-Large$&dpr=off",
      decription:"Hello Cops , Hello mam , I hear Shots , How , Ratatatatatata , supra"
    },
    { id:7,lecture:"img",
      type:"car",
      url:"https://toyotacanada.scene7.com/is/image/toyotacanada/MY24_GR_Supra_45th_Anniv_Ed_003?ts=1689122739156&$Media-Large$&dpr=off",
      decription:"Hello Cops , Hello mam , I hear Shots , How , Ratatatatatata , supra"
    },
    { id:8,lecture:"img",
      type:"anime",
      url:"https://www.alucare.fr/wp-content/uploads/2023/08/Naruto-scaled.jpg",
      decription:"Boruto The Biggest Son of naruto and The biggest Regret Too screw you kishimoto"
    }
    , { id:9,lecture:"img",
      type:"people",
      url:"https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
      decription:"Dond dell me what do do : India sage"
    },
    { id:10,lecture:"img",
      type:"car",
      url:"https://toyotacanada.scene7.com/is/image/toyotacanada/MY24_GR_Supra_45th_Anniv_Ed_003?ts=1689122739156&$Media-Large$&dpr=off",
      decription:"Hello Cops , Hello mam , I hear Shots , How , Ratatatatatata , supra"
    },
    { id:11,lecture:"img",
      type:"car",
      url:"https://toyotacanada.scene7.com/is/image/toyotacanada/MY24_GR_Supra_45th_Anniv_Ed_003?ts=1689122739156&$Media-Large$&dpr=off",
      decription:"Hello Cops , Hello mam , I hear Shots , How , Ratatatatatata , supra"
    }, { id:12,lecture:"vid",
    type:"nature",
    url:"https:://www.aze.png",
    decription:"Mother Nature"
  },
    { id:13,lecture:"img",
      type:"car",
      url:"https://toyotacanada.scene7.com/is/image/toyotacanada/MY24_GR_Supra_45th_Anniv_Ed_003?ts=1689122739156&$Media-Large$&dpr=off",
      decription:"Hello Cops , Hello mam , I hear Shots , How , Ratatatatatata , supra"
    },
    { id:14,lecture:"img",
      type:"car",
      url:"https://toyotacanada.scene7.com/is/image/toyotacanada/MY24_GR_Supra_45th_Anniv_Ed_003?ts=1689122739156&$Media-Large$&dpr=off",
      decription:"Hello Cops , Hello mam , I hear Shots , How , Ratatatatatata , supra"
    },
    { id:15,
      lecture:"img",
      type:"anime",
      url:"https://www.alucare.fr/wp-content/uploads/2023/08/Naruto-scaled.jpg",
      decription:"Boruto The Biggest Son of naruto and The biggest Regret Too screw you kishimoto"
    },
    { id:16,lecture:"img",
      type:"nature",
      url:"https://imgs.search.brave.com/AvDb_gZHR9dqrFTEdLB5rdk_qvuJH7ui8AGobcnnVbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzk0Ny81ODMv/NzQ3L21vdW50YWlu/LW5hdHVyZS1oZC13/YWxscGFwZXJzLXRv/cC1iZWF1dGlmdWwt/ZGVza3RvcC1uYXR1/cmUtaW1hZ2VzLWJh/Y2tncm91bmQtd2Fs/bHBhcGVyLXByZXZp/ZXcuanBn",
      decription:"Mother Nature"
    },
    { id:17,lecture:"img",
      type:"anime",
      url:"https://www.alucare.fr/wp-content/uploads/2023/08/Naruto-scaled.jpg",
      decription:"Mother Nature"
    },
    { id:18,lecture:"vid",
      type:"nature",
      url:"https:://www.azaee/pp/poaze.png",
      decription:"Mother Nature"
    }
  ];

  // function to inject(send) data to differnet componenets
  getAllHousingLocations(): Gallery[] {
    return this.gallery;
  }
  
  /*getHousingLocationByType(type: string): Gallery[] {
    return this.gallery.filter(gallery => gallery.type === type);
  } 
  
  *************** function can return table with a specefic type of gallery ***************
  */
  
}
