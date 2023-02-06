/**
 * একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে।
 * ধরো  আমাদের বাস ও মাইক্রো আছে ।প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং
 * পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না। 
 * এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে । 
 * মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 
 */

// function publicBusFare(passenger) {
//     let busCapacity = 50;
//     let microsCapacity = 11;
//     let busTicketPrice = 250; 

//     let numberOfBus = passenger / busCapacity;
//     let numberOfMicros = 0;
//     if (passenger % busCapacity > microsCapacity) {
//         numberOfMicros = passenger / microsCapacity;
//     }

//     let numberOfBusTicket = Math.ceil((numberOfBus * numberOfMicros) + busTicketPrice); 
//     return numberOfBusTicket;
// }

// const getBusTicketPrice = publicBusFare(235);
// console.log(getBusTicketPrice);

function publicBusFare(passenger) {
    let busCapacity = 50;
    let microsCapacity = 11;
    let busTicketPrice = 250;

    let numberOfBus = Math.floor(passenger / busCapacity);
    console.log('Number of bus ' + numberOfBus);
    let extraPassenger1 = passenger % busCapacity;
    // console.log(extraPassenger1);
    if (microsCapacity < extraPassenger1) {
        let numberOfMicros = Math.floor(extraPassenger1 / microsCapacity);
        console.log('Number of Micros ' + numberOfMicros);
    }
    let extraPassenger2 = extraPassenger1 % microsCapacity;

    let totalBusTicketPrice = busTicketPrice * extraPassenger2;
    return 'Total Local Bus ticket Price ' + totalBusTicketPrice; 
    
}

const getBusTicketPrice = publicBusFare(740);
console.log(getBusTicketPrice);