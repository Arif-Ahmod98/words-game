"use strict";

let button =document.querySelectorAll("button");

for ( let i =0; i < button.length; i++) {

    button[i].addEventListener("click", function() {

        let h1 = document.querySelector("h1");
        let text =this.innerHTML;
       
        switch (text) {

             case "A" :
             h1.innerHTML = text + " = Apple (আপেল)";
                break;

            case "B" :
                h1.innerHTML = text + " = Ball (বল)";
                break;

                case "C" :
                    h1.innerHTML = text + " = Cat (বিড়াল)";
                        break;

                case "D" :
                    h1.innerHTML = text + " = Dog (কুকুর)";
                            break;

                case "E" :
                    h1.innerHTML = text + " = Elephant (হাতি)";
                    break;
                case "F" :
                    h1.innerHTML = text + " = Football (ফুটবল)";
                    break;

                case "G" :
                        h1.innerHTML = text + " = Goat (ছাগল)";
                        break;
                case "H" :
                    h1.innerHTML = text + " = Hat (টুপি)";
                    break;

                case "I" :
                        h1.innerHTML = text + " = Ice-Cream (আইসক্রিম)";
                        break;

                case "J" :
                        h1.innerHTML = text + " = Jackfruit (কাঁঠাল)";
                        break;

                case "K" :
                         h1.innerHTML = text + " = Kite (ঘুড়ি)";
                        break;
                
                case "L" :
                    h1.innerHTML = text + " = Lion (সিংহ)";
                    break;

                case "M" :
                        h1.innerHTML = text + " = Mango (আম)";
                        break;
                case "N" :
                    h1.innerHTML = text + " = Nut (বাদাম)";
                    break;

                case "O" :
                        h1.innerHTML = text + " = Orange (কমলা)";
                        break;

                case "P" :
                        h1.innerHTML = text + " = Peacock (ময়ূর)";
                        break;

                case "Q" :
                         h1.innerHTML = text + " = Queen (রাণী)";
                        break;

                case "R" :
                        h1.innerHTML = text + " = Rat (ইঁদুর)";
                        break;
                case "S" :
                        h1.innerHTML = text + " = Star (তারা)";
                        break;
    
                case "T" :
                        h1.innerHTML = text + " = Tiger (বাঘ)";
                        break;
    
                case "U" :
                        h1.innerHTML = text + " = Umbrella (ছাতা)";
                        break;
    
                case "V" :
                        h1.innerHTML = text + " = Vegetables (শাকসবজি)";
                        break;

                case "W" :
                         h1.innerHTML = text + " = Watermelon (তরমুজ) ";
                         break;
        
                case "X" :
                        h1.innerHTML = text + " = X-ray (এক্স-রে)";
                        break;
        
                case "Y" :
                        h1.innerHTML = text + " = Yellow (হলুদ)";
                        break;

                case "Z" :
                         h1.innerHTML = text + " = Zoo (চিড়িয়াখানা)";
                        break;
        }

    });

}