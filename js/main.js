/* 
Name: Vinh Quang Pham 
Create: 5/04/2021
Version: 1.0
 */
// reduce the code for document.getElementById() => refactor code.
function getMyEle(ele) {
    return document.getElementById(ele);
}








// Purpose: Check what kind of uber that the user select.
// Return: the radio that the user selected.
function getKindOfService(){ // when user click the radio button to choose the kind of car, this function will run.
    var resultKindOfService;
    var uberX = document.getElementById('uberX').checked; // return true or false => take the result user choose for service.
    var uberComFort= getMyEle('uberComFort').checked; // refactore code
    var uberXL = document.getElementById('uberXL').checked;
    
    // to know what radio button user checked
    if(uberX){ // uberX == truc => the user select uber eat
        resultKindOfService = "uberX";
    }
    else if(uberComFort){
        resultKindOfService = "uberComFort";
    }
    else if(uberXL){
        resultKindOfService = "uberXL";
    }

    return resultKindOfService;
}

// function to calcuate timeInRide
function calcuateTimeInRide(){
    var hourInRide = document.getElementById("hour").value;
    hourInRide = parseFloat(hourInRide);
    var minuteInRide = document.getElementById("minute").value;
    minuteInRide = parseFloat(minuteInRide);
    return hourInRide*60 + minuteInRide;
}

// function to calcuate uberFare
function uberFareFomular (baseFare, costPerMinute, timeInRide, costPerKm, rideDistance, bookingFee){
    return result = baseFare + (costPerMinute * timeInRide) + (costPerKm * rideDistance) + bookingFee; 
}


// Tra ve: Tong tien dua vao soKM nguoi dung nhap vao + thoi gian cho 
function calculatePrice(){ // when the user click the  "Tinh Tien" button in the form, this function will run.

    var rideDistance = document.getElementById('numberOfKm').value; // the datatype the we get is string not number
    rideDistance = parseFloat(rideDistance); // to convert from string value into the float value.
    var timeInRide = calcuateTimeInRide();
    
    
    
    var displayFareForUberService = document.getElementById('displayFareForUberService');
    
    displayFareForUberService.style.display = "block"; // display the price on the website => change style of element (css)

    var displayResult = document.getElementById('displayResult');


    // caluculate the price 
    /*
    Source: 
    - Fomular for calculate: http://taxihowmuch.com/
    - Booking fee: $0.55 - https://www.finder.com.au/uber-vs-taxi
    - Price for each uber Service - https://www.finder.com.au/uber-sydney-fares-services
     */
    var kindOfService = getKindOfService();
    // the base fare for kind of service.
    var baseFareUberX = 2.5;
    var baseFareUberComFort = 3.38;
    var baseFareUberXL = 4;
    
    // the price per km
    var costPerKmUberX  = 0.40;
    var costPerKmUberComFort = 0.54;
    var costPerKmUberXL = 0.61;
    

    // the price per-minute - include wating time.
    var costPerMinuteUberX = 0.61;
    var costPerMinuteUberComFort = 0.54;
    var costPerMinuteUberXL = 0.61;

    var bookingFee = 0.55;
    var rideFare = 0;
    
    
    switch(kindOfService){
        case 'uberX':
            rideFare = uberFareFomular(baseFareUberX, costPerMinuteUberX, timeInRide, costPerKmUberX, rideDistance, bookingFee);
            break;
        case 'uberComFort':
            rideFare = uberFareFomular(baseFareUberComFort, costPerMinuteUberComFort, timeInRide, costPerKmUberComFort, rideDistance, bookingFee);
            break;
        case 'uberXL':
            rideFare = uberFareFomular(baseFareUberXL, costPerMinuteUberXL, timeInRide, costPerKmUberXL, rideDistance, bookingFee);
            break;

    }

    displayResult.innerHTML = rideFare; // take the value and put it on HTMl.

}


