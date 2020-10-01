module.exports = function taxiApp() {

    function whichPrice(start, end) {
        var price = 0;
        if (start && end === 1 && 2) {
            price = 15;
        }
        // if (start&&end ===)
        else {
            price = 10
        } return price

    }


    function bookJourney(name, startPoint, endPoint) {
        var msg = "";
        if (name) {
            if (startPoint !== endPoint) {

               msg="Your journey has been booked successfully." //then add to database 
            }
else{msg="Please fill in the required details above."}

        }

    }
    {
        return whichPrice,
            bookJourney


    }


}