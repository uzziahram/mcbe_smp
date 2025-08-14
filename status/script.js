import {status} from "./status.js";


function get_status(text){
    //gets the status of status.js.
    //status.js is a file modified by the server itself using bash.
    if (status){
        text.innerHTML = "Server is Online!"
    }
    else {
        text.innerHTML = "Server is Offline!"
    }
}

get_status(document.getElementById('status'))