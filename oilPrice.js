function oilPrice(per1, per2, per3) {
    // console.log(typeof(per1));
    if(typeof(per1) !== 'number' || typeof(per2) !== 'number' || typeof(per3) !== 'number') {
        return 'Input Valid Number format';
    }
    let petrol = per1 * 114;
    let diesel = per2 * 130;
    let octane = per3 * 135;

    return petrol + diesel + octane;
}

const getOilPrice = oilPrice(1, 1, 'sum');
console.log(getOilPrice);