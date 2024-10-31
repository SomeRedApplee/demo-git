"use strict";

function getTimeCurrentTime() {
  let time = new Date();
  return time.toLocaleString('en-US').split(',')[1];
}

function updateCurrentTime() {
  let timeNode = document.getElementById('time');
  timeNode.innerHTML = getTimeCurrentTime();
}

setInterval(updateCurrentTime, 1000);


function classHours() {
  let myDate = new Date();
  let hrs = myDate.getHours();
  let day = myDate.getDay(); //lundi = 1, vendredi = 5
  
  let whereAt = ["present", "not-present", "not-at-school"];
  
  if (day == 1) { 
    if ((hrs >= 8 && hrs < 11) || (hrs >= 14 && hrs < 16)) {
      document.getElementById("nameEdouard").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameEdouard").className =whereAt[2];
    } 

    if ((hrs >= 10 && hrs < 12) || (hrs >= 13 && hrs < 15)) {
      document.getElementById("nameLeanne").className =whereAt[0];
    } else if (hrs >= 15) {
      document.getElementById("nameLeanne").className =whereAt[2];
    } 

    if ((hrs >= 8 && hrs < 11) || (hrs >= 12 && hrs < 14)) {
      document.getElementById("nameLoic").className =whereAt[0];
    } else if (hrs >= 14) {
      document.getElementById("nameLoic").className =whereAt[2];
    } 

    if ((hrs >= 9 && hrs < 12) || (hrs >= 13 && hrs < 17)) {
      document.getElementById("nameAntoine").className =whereAt[0];
    } else if(hrs >= 17) {
      document.getElementById("nameAntoine").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 11 && hrs < 13)) {
      document.getElementById("nameMathieuG").className =whereAt[0];
    } else if (hrs >= 13) {
      document.getElementById("nameMathieuG").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 11) || (hrs >= 13 && hrs < 15)) {
      document.getElementById("nameJacob").className =whereAt[0];
    } else if (hrs >= 15) {
      document.getElementById("nameJacob").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 11 && hrs < 12)  || (hrs >= 13 && hrs < 14) || (hrs >= 16 && hrs < 18)) {
      document.getElementById("nameAngelie").className =whereAt[0]
    } else if (hrs >= 18) {
      document.getElementById("nameAngelie").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 12 && hrs < 16)) {
      document.getElementById("nameSophie").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameSophie").className =whereAt[2];
    }

    if (hrs >= 12 && hrs < 15) {
      document.getElementById("nameCharles").className =whereAt[0];
    } else if (hrs >= 15) {
      document.getElementById("nameCharles").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 13 && hrs < 14)) {
      document.getElementById("namePhilip").className =whereAt[0];
    } else if (hrs >= 14) {
      document.getElementById("namePhilip").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 11) || (hrs >= 12 && hrs < 14) || (hrs >= 15 && hrs < 17)) {
      document.getElementById("nameGab").className =whereAt[0];
    } else if (hrs >= 17) {
      document.getElementById("nameGab").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 12) || (hrs >= 13 && hrs < 16)) {
      document.getElementById("namePomme").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("namePomme").className =whereAt[2];
    }
    
    if ((hrs >= 8 && hrs < 12) || (hrs >= 13 && hrs < 14) || (hrs >= 16 && hrs < 18)) {
      document.getElementById("nameArianne").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameArianne").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 12) || (hrs >= 16 && hrs < 18)) {
      document.getElementById("nameAlex").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameAlex").className =whereAt[2];
    }

    if ((hrs >= 10 && hrs < 12) || (hrs >= 13 && hrs < 16)) {
      document.getElementById("nameWill").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameWill").className =whereAt[2];
    } 

    if ((hrs >= 10 && hrs < 12) || (hrs >= 13 && hrs < 15)) {
      document.getElementById("nameMia").className =whereAt[0];
    } else if (hrs >= 15) {
      document.getElementById("nameMia").className =whereAt[2];
    }
    
    if ((hrs >= 8 && hrs < 10) || (hrs >= 11 && hrs < 13) || (hrs >= 14 && hrs < 16)) {
      document.getElementById("nameGui").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameGui").className =whereAt[2];
    }
    
    if ((hrs >= 8 && hrs < 11) || (hrs >= 12 && hrs < 18)) {
      document.getElementById("nameEvan").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameEvan").className =whereAt[2];
    }
    
    if ((hrs >= 8 && hrs < 11) || (hrs >= 13 && hrs < 15)) {
      document.getElementById("nameCharlotte").className =whereAt[0];
    } else if (hrs >= 15) {
      document.getElementById("nameCharlotte").className =whereAt[2];
    } 
    
    if ((hrs >= 8 && hrs < 10) || (hrs >= 12 && hrs < 18)) {
      document.getElementById("nameLaurence").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameLaurence").className =whereAt[2];
    } 

  } else if (day == 2) { //mardi
    if ((hrs >= 8 && hrs < 11) || (hrs >= 12 && hrs < 15) || (hrs >= 16 && hrs < 18)) {
      document.getElementById("nameEdouard").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameEdouard").className =whereAt[2];
    }

    if ((hrs >= 10 && hrs < 12) || (hrs >= 15 && hrs < 17)) {
      document.getElementById("nameLeanne").className =whereAt[0];
    } else if (hrs >= 17) {
      document.getElementById("nameLeanne").className =whereAt[2];
    }

    if ((hrs >= 11 && hrs < 13) || (hrs >= 15 && hrs < 18)) {
      document.getElementById("nameLoic").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameLoic").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 12 && hrs < 17)) {
      document.getElementById("nameAntoine").className =whereAt[0];
    } else if (hrs >= 17) {
      document.getElementById("nameAntoine").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 13 && hrs < 16)) {
      document.getElementById("nameMathieuG").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameMathieuG").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 12) || (hrs >= 13 && hrs < 15)) {
      document.getElementById("nameJacob").className =whereAt[0];
    } else if (hrs >= 15) {
      document.getElementById("nameJacob").className =whereAt[2];
    }

    if (hrs >= 13 && hrs < 18) {
      document.getElementById("nameAngelie").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameAngelie").className =whereAt[2];
    }

    if ((hrs >= 12 && hrs < 14) || (hrs >= 16 && hrs < 18)) {
      document.getElementById("nameSophie").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameSophie").className =whereAt[2];
    }

    if (hrs >= 14 && hrs < 18) {
      document.getElementById("nameCharles").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameCharles").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 12) || (hrs >= 13 && hrs < 15)) {
      document.getElementById("namePhilip").className =whereAt[0];
    } else if (hrs >= 15) {
      document.getElementById("namePhilip").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 11) || (hrs >= 13 && hrs < 18)) {
      document.getElementById("nameGab").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameGab").className =whereAt[2];
    }

    if ((hrs >= 9 && hrs < 12) || (hrs >= 15 && hrs < 18)) {
      document.getElementById("namePomme").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("namePomme").className =whereAt[2];
    }

    if (hrs >= 13 && hrs < 15) {
      document.getElementById("nameArianne").className =whereAt[0];
    } else if (hrs >= 15) {
      document.getElementById("nameArianne").className =whereAt[2];
    }

    if (hrs >= 12 && hrs < 16) {
      document.getElementById("nameAlex").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameAlex").className =whereAt[2];
    }

    if ((hrs >= 9 && hrs < 12) || (hrs >= 13 && hrs < 15)) {
      document.getElementById("nameWill").className =whereAt[0];
    } else if (hrs >= 15) {
      document.getElementById("nameWill").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 15 && hrs < 17)) {
      document.getElementById("nameMia").className =whereAt[0];
    } else if (hrs >= 17) {
      document.getElementById("nameMia").className =whereAt[2];
    }
    
    if ((hrs >= 8 && hrs < 12) || (hrs >= 14 && hrs < 18)) {
      document.getElementById("nameGui").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameGui").className =whereAt[2];
    }
    
    if ((hrs >= 8 && hrs < 10) || (hrs >= 12 && hrs < 13)) {
      document.getElementById("nameEvan").className =whereAt[0];
    } else if (hrs >= 13) {
      document.getElementById("nameEvan").className =whereAt[2];
    }
    
    if ((hrs >= 8 && hrs < 10) || (hrs >= 13 && hrs < 15)) {
      document.getElementById("nameCharlotte").className =whereAt[0];
    } else if (hrs >= 15) {
      document.getElementById("nameCharlotte").className =whereAt[2];
    } 
    
    if (hrs >= 9 && hrs < 12) {
      document.getElementById("nameLaurence").className =whereAt[0];
    } else if (hrs >= 12) {
      document.getElementById("nameLaurence").className =whereAt[2];
    } 

  } else if (day == 3) { //mercredi
    if ((hrs >= 9 && hrs < 12) || (hrs >= 16 && hrs < 18)) {
      document.getElementById("nameEdouard").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameEdouard").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 15 && hrs < 18)) {
      document.getElementById("nameLeanne").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameLeanne").className =whereAt[2];
    }

    if ((hrs >= 9 && hrs < 12) || (hrs >= 14 && hrs < 16)) {
      document.getElementById("nameLoic").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameLoic").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 15 && hrs < 18)) {
      document.getElementById("nameAntoine").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameAntoine").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 12) || (hrs >= 16 && hrs < 18)) {
      document.getElementById("nameMathieuG").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameMathieuG").className =whereAt[2];
    }

    if (hrs >= 8 && hrs < 10) {
      document.getElementById("nameJacob").className =whereAt[0];
    } else if (hrs >= 10) {
      document.getElementById("nameJacob").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 12) || (hrs >= 16 && hrs < 18)) {
      document.getElementById("nameAngelie").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameAngelie").className =whereAt[2];
    }

    if (hrs >= 14 && hrs < 18) {
      document.getElementById("nameCharles").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameCharles").className =whereAt[2];
    }

    if ((hrs >= 10 && hrs < 12) || (hrs >= 14 && hrs < 17)) {
      document.getElementById("nameSophie").className =whereAt[0];
    } else if (hrs >= 17) {
      document.getElementById("nameSophie").className =whereAt[2];
    }

    if ((hrs >= 10 && hrs < 12) || (hrs >= 14 && hrs < 18)) {
      document.getElementById("namePhilip").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("namePhilip").className =whereAt[2];
    }

    if (hrs >= 14 && hrs < 16) {
      document.getElementById("nameGab").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameGab").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 14 && hrs < 16)) {
      document.getElementById("namePomme").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("namePomme").className =whereAt[2];
    }

    if ((hrs >= 10 && hrs < 12) || (hrs >= 15 && hrs < 18)) {
      document.getElementById("nameArianne").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameArianne").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 14 && hrs < 16)) {
      document.getElementById("nameAlex").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameAlex").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 12) || (hrs >= 14 && hrs < 16)) {
      document.getElementById("nameWill").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameWill").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 11) || (hrs >= 15 && hrs < 18)) {
      document.getElementById("nameMia").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameMia").className =whereAt[2];
    }
    
    if ((hrs >= 8 && hrs < 10) || (hrs >= 11 && hrs < 12) || (hrs >= 14 && hrs < 16)) {
      document.getElementById("nameGui").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameGui").className =whereAt[2];
    }
    
    document.getElementById("nameEvan").className = whereAt[2];
    
    if (hrs >= 8 && hrs < 10) {
      document.getElementById("nameCharlotte").className =whereAt[0];
    } else if (hrs >= 10) {
      document.getElementById("nameCharlotte").className =whereAt[2];
    } 
    
    if (hrs >= 8 && hrs < 12) {
      document.getElementById("nameLaurence").className =whereAt[0];
    } else if (hrs >= 12) {
      document.getElementById("nameLaurence").className =whereAt[2];
    } 
    
  } else if (day == 4) { //jeudi
    if ((hrs >= 10 && hrs < 12) || (hrs >= 13 && hrs < 15)) {
      document.getElementById("nameEdouard").className =whereAt[0];
    } else if (hrs >= 15) {
      document.getElementById("nameEdouard").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 11) || (hrs >= 12 && hrs < 14) || (hrs >= 16 && hrs < 18)) {
      document.getElementById("nameLeanne").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameLeanne").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 13 && hrs < 18)) {
      document.getElementById("nameLoic").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameLoic").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 12) || (hrs >= 14 && hrs < 16)) {
      document.getElementById("nameAntoine").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameAntoine").className =whereAt[2];
    }

    if (hrs >= 12 && hrs < 16) {
      document.getElementById("nameMathieuG").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameMathieuG").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 12) || (hrs >= 14 && hrs < 18)) {
      document.getElementById("nameJacob").className =whereAt[0];
    } else if (hrs >=18 ) {
      document.getElementById("nameJacob").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 11 && hrs < 12)  || (hrs >= 13 && hrs < 15)) {
      document.getElementById("nameAngelie").className =whereAt[0];
    } else if (hrs >= 15) {
      document.getElementById("nameAngelie").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 12 && hrs < 16)) {
      document.getElementById("nameSophie").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameSophie").className =whereAt[2];
    }

    if (hrs >= 8 && hrs < 12) {
      document.getElementById("nameCharles").className =whereAt[0];
    } else if (hrs >= 12) {
      document.getElementById("nameCharles").className =whereAt[2];
    }

    if ((hrs >= 10 && hrs < 12) || (hrs >= 13 && hrs < 15)) {
      document.getElementById("namePhilip").className =whereAt[0];
    } else if (hrs >= 15) {
      document.getElementById("namePhilip").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 12) || (hrs >= 14 && hrs < 18)) {
      document.getElementById("nameGab").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameGab").className =whereAt[2];
    }

    if ((hrs >= 9 && hrs < 12) || (hrs >= 13 && hrs < 18)) {
      document.getElementById("namePomme").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("namePomme").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 11 && hrs < 12) || (hrs >= 13 && hrs < 15)) {
      document.getElementById("nameArianne").className =whereAt[0];
    } else if (hrs >= 15) {
      document.getElementById("nameArianne").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 11) || (hrs >= 12 && hrs < 13) || (hrs >= 14 && hrs < 16)) {
      document.getElementById("nameAlex").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameAlex").className =whereAt[2];
    }

    if ((hrs >= 9 && hrs < 12) || (hrs >= 13 && hrs < 18)) {
      document.getElementById("nameWill").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameWill").className =whereAt[2];
    }

    if (hrs >= 12 && hrs < 18) {
      document.getElementById("nameMia").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameMia").className =whereAt[2];
    }
    
    if ((hrs >= 10 && hrs < 12) || (hrs >= 13 && hrs < 17)) {
      document.getElementById("nameGui").className =whereAt[0];
    } else if (hrs >= 17) {
      document.getElementById("nameGui").className =whereAt[2];
    }
    
    if ((hrs >= 8 && hrs < 10) || (hrs >= 11 && hrs < 13)) {
      document.getElementById("nameEvan").className =whereAt[0];
    } else if (hrs >= 13) {
      document.getElementById("nameEvan").className =whereAt[2];
    }
    
    if ((hrs >= 8 && hrs < 12) || (hrs >= 14 && hrs < 16)) {
      document.getElementById("nameCharlotte").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameCharlotte").className =whereAt[2];
    }
    
    if ((hrs >= 8 && hrs < 10) || (hrs >= 12 && hrs < 18)) {
      document.getElementById("nameLaurence").className =whereAt[0];
    } else if (hrs >= 18) {
      document.getElementById("nameLaurence").className =whereAt[2];
    } 
    
  } else if (day == 5) { //vendredi
    if ((hrs >= 10 && hrs < 12) || (hrs >= 13 && hrs < 16)) {
      document.getElementById("nameEdouard").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameEdouard").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 11) || (hrs >= 12 && hrs < 13) || (hrs >= 14 && hrs < 16)) {
      document.getElementById("nameLeanne").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameLeanne").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 13 && hrs < 16)) {
      document.getElementById("nameLoic").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameLoic").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 13 && hrs < 14) || (hrs >=15 && hrs < 16)) {
      document.getElementById("nameAntoine").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameAntoine").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 11) || (hrs >= 12 && hrs < 14)) {
      document.getElementById("nameMathieuG").className =whereAt[0];
    } else if (hrs >= 14) {
      document.getElementById("nameMathieuG").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 11 && hrs < 13)) {
      document.getElementById("nameJacob").className =whereAt[0];
    } else if (hrs >= 13) {
      document.getElementById("nameJacob").className =whereAt[2];
    }

    if ((hrs >= 10 && hrs < 11) || (hrs >= 12 && hrs < 14)) {
      document.getElementById("nameAngelie").className =whereAt[0];
    } else if (hrs >= 14) {
      document.getElementById("nameAngelie").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 12 && hrs < 14)) {
      document.getElementById("nameSophie").className =whereAt[0];
    } else if (hrs >= 14) {
      document.getElementById("nameSophie").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 12 && hrs < 16)) {
      document.getElementById("nameCharles").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameCharles").className =whereAt[2];
    }

    if ((hrs >= 10 && hrs < 11) || (hrs >= 12 && hrs < 14)) {
      document.getElementById("namePhilip").className =whereAt[0];
    } else if (hrs >= 14) {
      document.getElementById("namePhilip").className =whereAt[2];
    }

    if (hrs >= 11 && hrs < 12) {
      document.getElementById("nameGab").className =whereAt[0];
    } else if (hrs >= 12) {
      document.getElementById("nameGab").className =whereAt[2];
    }
    
    if (hrs >= 11 && hrs < 13) {
      document.getElementById("namePomme").className =whereAt[0];
    } else if (hrs >= 13) {
      document.getElementById("namePomme").className =whereAt[2];
    }

    if ((hrs >= 10 && hrs < 11) || (hrs >= 13 && hrs < 16)) {
      document.getElementById("nameArianne").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameArianne").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 10) || (hrs >= 16 && hrs < 16)) {
      document.getElementById("nameAlex").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameAlex").className =whereAt[2];
    }

    if (hrs >= 10 && hrs < 13)  {
      document.getElementById("nameWill").className =whereAt[0];
    } else if (hrs >= 13) {
      document.getElementById("nameWill").className =whereAt[2];
    }

    if ((hrs >= 8 && hrs < 11) || (hrs >= 12 && hrs < 13) || (hrs >= 14 && hrs < 16)) {
      document.getElementById("nameMia").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameMia").className =whereAt[2];
    }
    
    if ((hrs >= 10 && hrs < 12) || (hrs >= 13 && hrs < 16)) {
      document.getElementById("nameGui").className =whereAt[0];
    } else if (hrs >= 16) {
      document.getElementById("nameGui").className =whereAt[2];
    }
    
    if (hrs >= 8 && hrs < 10) {
      document.getElementById("nameEvan").className =whereAt[0];
    } else if (hrs >= 10) {
      document.getElementById("nameEvan").className =whereAt[2];
    }
    
    if ((hrs >= 8 && hrs < 10) || (hrs >= 11 && hrs < 13)) {
      document.getElementById("nameCharlotte").className =whereAt[0];
    } else if (hrs >= 13) {
      document.getElementById("nameCharlotte").className =whereAt[2];
    } 
    
    if (hrs >= 8 && hrs < 11) {
      document.getElementById("nameLaurence").className =whereAt[0];
    } else if (hrs >= 11) {
      document.getElementById("nameLaurence").className =whereAt[2];
    } 
  }
}

setInterval(classHours, 1000);