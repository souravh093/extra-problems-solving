function publicBusFare(passenger) {
    let busCapacity = 50;
    let microsCapacity = 11;
    let busTicketPrice = 250; 

    let numberOfBus = passenger / busCapacity;
    console.log(numberOfBus);
    let numberOfMicros = 0;
    if (passenger % busCapacity > microsCapacity) {
        numberOfMicros = passenger / microsCapacity;
    }

    let numberOfBusTicket = Math.ceil((numberOfBus * numberOfMicros) + busTicketPrice); 
    return numberOfBusTicket;
}

const getBusTicketPrice = publicBusFare(235);
console.log(getBusTicketPrice);