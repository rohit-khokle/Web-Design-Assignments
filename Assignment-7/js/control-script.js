import { fromEvent, merge } from 'https://dev.jspm.io/rxjs@6/_esm2015';


// Get all elements
let boldButton = document.getElementsByClassName('boldButton')[0];
let italicButton = document.getElementsByClassName('italicsButton')[0];
let selectFontSize = document.getElementsByClassName('selectFontSize')[0];
let whiteboard =  document.getElementsByClassName('whiteboard')[0];

// variables to maintain the status of the buttons
let boldSelect = false;
let italicSelect = false;


const element = [
    whiteboard
];
// Div section event listener


// Event lists
const events = [
    'mouseup',
    'mousedown',
    'keyup',
    'keydown'

];

const eventStreams = events.map((ev) => fromEvent(element, ev));
const allEvents = merge(...eventStreams);


// Subscription code for div section
const subscription = allEvents.subscribe(event => {
    
    // Gets text selection
    let sel = window.getSelection();

    // Get Font and select the appropriate value in selection
    let fontSize = event.target.style.cssText.substring(11,13);
    if(fontSize)
        selectFontSize.value = fontSize;
    else
        selectFontSize.value = 16;
    
    // Get class and check what classes the selected text have
    let temp = event.target.classList;
    let firstClass = "";
    let secondClass = "";
    temp.forEach((value, index) => {
        if(index == 0)
            firstClass = value;
        else 
            secondClass = value;
        }
    );

    // Get Button references
    let boldButton = document.getElementsByClassName('boldButton')[0];
    let italicsButton = document.getElementsByClassName('italicsButton')[0];

    // If the selected text is not bold or italics
    if(firstClass == "" && secondClass == ""){
        boldButton.style.backgroundColor="darkcyan";
        italicsButton.style.backgroundColor="darkcyan";
        boldSelect = false;
        italicSelect = false;

    }
    // If the selected text is bold or italics
    else if((firstClass == "makeMeBold" && secondClass == "makeMeItalic") ||
    (firstClass == "makeMeItalic" && secondClass == "makeMeBold")){
        boldButton.style.backgroundColor="grey";
        italicsButton.style.backgroundColor="grey";
        boldSelect = true;
        italicSelect = true;

    }
    else if(firstClass == "makeMeItalic"){
        italicsButton.style.backgroundColor="grey";
        boldButton.style.backgroundColor="darkcyan";
        boldSelect = false;
        italicSelect = true;
    }
    else if(firstClass == "makeMeBold"){
        boldButton.style.backgroundColor="grey";
        italicsButton.style.backgroundColor="darkcyan";
        boldSelect = true;
        italicSelect = false;
    }
    else {
        boldButton.style.backgroundColor="darkcyan";
        italicsButton.style.backgroundColor="darkcyan";
        boldSelect = false;
        italicSelect = false;

    }

});




// Tools event listener..
const element1 = [
     boldButton,
     italicButton,
     selectFontSize
 ];
 

const observable1 =  fromEvent(element1, "click"); 
const subscription1 = observable1.subscribe(event => {

    // Define array of fontStyle, and other variables 
    let fontStyle = [];
    let boldButton = document.getElementsByClassName('boldButton')[0];
    let italicsButton = document.getElementsByClassName('italicsButton')[0];
    let selectFontSize = document.getElementsByClassName('selectFontSize')[0];
    let selectedFontSize = selectFontSize.value;
    let buttonSelected = event.target.classList;
   
    // Enable/Disable button based on selection
    if(buttonSelected == 'boldButton'){
        boldSelect = !boldSelect;
        if(boldSelect)
            boldButton.style.backgroundColor="grey";
        else
            boldButton.style.backgroundColor="darkcyan";
    }
    if(buttonSelected == 'italicsButton'){
        italicSelect = !italicSelect;
        if(italicSelect)
            italicsButton.style.backgroundColor="grey";
        else
            italicsButton.style.backgroundColor="darkcyan";
    }


    // Adding classnames to the fontStyle array
    if(boldSelect && !italicSelect){
        fontStyle[0] = "makeMeBold";
        fontStyle[1] = "unItalizeMe";
    }
    else if(!boldSelect && italicSelect){
        fontStyle[0] = "makeMeItalic";
        fontStyle[1] = "unboldMe";
    }
    else if(!boldSelect && !italicSelect){
        fontStyle[0] = "makeMeNormal";
    }
    else if(boldSelect && italicSelect){
        fontStyle[0] = "makeMeBold";  
        fontStyle[1] = "makeMeItalic";
    }  




    // Gets selection
    let sel = window.getSelection(); 
    if (sel.rangeCount) {
      // Creates a new element, and insert the selected text with the chosen style
      let e = document.createElement('span');

       fontStyle.forEach((value) => {   
            e.classList.add(value);
        });

      let temp = sel.toString();
      temp  = temp.fontsize(selectedFontSize);    
      e.style = "font-size : "+selectedFontSize+"px";
      e.innerHTML = sel.toString(); //.fontsize(selectedFontSize);; // Selected text
      let range = sel.getRangeAt(0);
      range.deleteContents(); // Deletes selected text…
      range.insertNode(e); // … and inserts the new element at its place
    }
});