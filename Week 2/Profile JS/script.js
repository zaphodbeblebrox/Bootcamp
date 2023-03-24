// @brief: Changes the text of the targetID to the specified newName text
// @param:  targetID     :  #id of user-ID to be processed
// @param:  newName      :  New Name text of of targetID
// @return: none
function changeName(targetID, newName) {
    document.querySelector(targetID).innerText = newName;
}

// @brief: Processes the Connection Request and removes target div.user from div.requests
//          If the accepted is true, "Your Connections" shall be imcremented
// @param:  targetID     :  #id of user-ID to be processed
// @param:  accepted     :  boolean: True = Accepted button, False = Rejected Button
// @return: none
function processConnRequest(targetID, accepted) {
    // Decrement Connection Request Number
    if (document.querySelector("#num_req").innerText > 0) {
        document.querySelector("#num_req").innerText--;
    }
    // Removed targetID div from Connection Requests
    document.getElementById(targetID).remove();
    // If true, increment "Your Connections"
    if (accepted == true) {
        incrementConnections();
    }
}

// Increment Your Connections Number
// @brief: Increments Your Connections Number
//          If the accepted is true, "Your Connections" shall be imcremented
// @param:  none
// @return: none
function incrementConnections() {
    // Increment Your Connections Number
    document.querySelector("#num_conn").innerText++;
}
