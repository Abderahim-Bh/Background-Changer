let myBackground = document.getElementById("backgroundId");
let mySelect = document.getElementById("selectId");
let myHeader = document.getElementById("headerId");
let myColors = {
    red :"#d00000",
    yellow:"#FEFF86",
    green :"#c5d86d",
    orange :"#f4845f",
    blue :"#669bbc"
}

mySelect.onchange  = () =>{
    let selectedValue = mySelect.options[mySelect.selectedIndex].value;
    switch(selectedValue){
        case "red":
            myBackground.style.backgroundColor=myColors.red;
            myHeader.textContent="Red";
            break;
        case "yellow":
            myBackground.style.backgroundColor=myColors.yellow;
            myHeader.textContent="Yellow";
            break;
        case "green":
            myBackground.style.backgroundColor=myColors.green;
            myHeader.textContent="Green";
            break;
        case "orange":
            myBackground.style.backgroundColor=myColors.orange;
            myHeader.textContent="Orange";
            break;
        default :
            myBackground.style.backgroundColor=myColors.blue;
            myHeader.textContent="Blue";
            break;
    }
} 
