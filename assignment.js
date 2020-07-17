//Convert feet to mile

function feetToMile (feet){
    var mile = feet/5280;
    return mile;
}
var result = feetToMile(5280);
console.log("Result:", result, "Mile");

//Wood calculator

function woodCalculator(chair, table, bed) {    
        var chair = chair * 1;
        var table = table * 3;
        var bed = bed * 5;
        var sum = chair + table + bed;
        return sum;
}
var result = woodCalculator(8, 4, 3)
console.log("Total Wood:", result, "Cft")

//Brick Calculator

function brickCalculator(floor) {
    if (floor >= 1 && floor <= 10) {
        var brick = floor * 15 * 1000;
        return brick;
    }
    else if (floor >= 11 && floor <= 20) {
        var brick = (10 * 15 * 1000) + ((floor - 10) * 12 * 1000);
        return brick;
    }
    else if (floor >= 20) {
        var brick = (10 * 15 * 1000) + (10 * 12 * 1000) + ((floor - 20) * 10 * 1000);
        return brick;
    }    
}
var result = brickCalculator(60);
console.log("Total Brick Qty :", result, "Pcs");

//Tiny Friend

function tinyFriend(names) {
    if (names === undefined || names.length == 0) {        
    }
    else {
        var smallName = names[0];
        for (var i = 0; i < names.length; i++) {
            var friendName = names[i];
            if (friendName.length < smallName.length) {
                smallName = friendName;
            }

        }
        return smallName;
    }

}
var result = tinyFriend(['atikul', 'faysal', 'rasal', 'rana', 'babul', 'tohen', 'rose']);
console.log("Name :", result, "(Small length)");