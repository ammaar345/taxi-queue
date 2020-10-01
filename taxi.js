// const beepbeep = require("beepbeep");

const beepbeep = require("beepbeep");

module.exports = function taxiApp(pool) {

    async function whichPrice(start, end) {
        var price = 0;
        if (start=== "C" && end=== "D" || end==="D" &&start==="C") {
            price = 20;
        }

        if(start==="K" && end==="C"||end==="K"&& start==="C"){
            price = 15;
        }
        // if (start&&end ===)
        // else {
        //     price = 10
        // }
        return price

    }
    async function ifAvailable(availablility) {
        if (availablility = true) {
            bookJourney()
        }
    }
async function insertBooking(name){
    var INSERT_QUERY="insert into booking (names) values($1)"
    await pool.query(INSERT_QUERY,[name])
}
    async function bookJourney(name, startPoint, endPoint) {
        var msg = "";
        if (name) {
            if (startPoint !== endPoint) {
                const INSERT_QUERY = ' insert into taxi_journey (start_location,end_location,price) values ($1,$2,$3)';
                const price = await whichPrice(startPoint,endPoint);
                
                await pool.query(INSERT_QUERY, [startPoint,endPoint, price]);
                await insertBooking(name)
                
                msg = "Your journey has been booked successfully." //then add to database 
            }
            else {
                msg = "Please fill in the required details above."
            }
            return msg
        }


    }
    async function taxiFill(passengers) {
        if (passengers = 15) {
            beepbeep(2)

        }
    }

    return {
        whichPrice,
        bookJourney,
        taxiFill,
        ifAvailable
    }


}