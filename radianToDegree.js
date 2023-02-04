function radianToDegree(radian) {
    let doRadianToDegree = (radian * (180/3.14159265359)).toFixed(2)
    return doRadianToDegree;
}

const getRadian = radianToDegree(10);
console.log(getRadian);