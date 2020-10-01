// const beepbeep = require("beepbeep");

const beepbeep = require("beepbeep");

var passengerCount = 0;

module.exports = function taxiApp(pool) {
    async function whichPrice(start, end) {
        var price = 0;
        if (start === "C" && end === "D" || end === "D" && start === "C") {
            price = 20;
        }

        if (start === "K" && end === "C" || end === "K" && start === "C") {
            price = 15;
        }
        // if (start&&end ===)
        // else {
        //     price = 10
        // }
        return price;

    }

    async function insertBooking(name) {
        var INSERT_QUERY = "insert into booking (names) values($1)"
        await pool.query(INSERT_QUERY, [name])
    }

    function passengers() {

        if (passengerCount < 15) {
            passengerCount++;
        } else if (passengerCount = 15) {
            beepbeep(2)
            passengerCount = 0;
        }
        return passengerCount;
    }

    function addToGraph() {



    }

    function drivMsg() {
        return "Your taxi is ready to go!"

    }
    async function bookJourney(name, startPoint, endPoint) {
        passengers()
        var msg = "";
        if (name) {
            endPoint
            if (startPoint !== endPoint) {
                // var price = await whichPrice(startPoint, endPoint);
                const INSERT_QUERY = (' insert into taxi_journey (start_location,end_location,price) values ($1,$2,$3)');
                const price = await whichPrice(startPoint, endPoint);

                await pool.query(INSERT_QUERY, [startPoint, endPoint, price]);
                await insertBooking(name)

                msg = "Your journey has been booked successfully." //then add to database 
            }
            return msg
        }


    }


    return {
        whichPrice,
        bookJourney,
        passengers,
        drivMsg
    }


}