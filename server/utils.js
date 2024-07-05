function getRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function doSomeHeavyTask(){
    const ms = getRandomValue([100,200,300,400,500,800,900,1000, 2000, 3000, 4000, 5000]);
    const shouldThrowError = getRandomValue([1,2,3,4]) === 3;
    if(shouldThrowError){
        const randomError = getRandomValue([
            "Internal Server Error",
            "Bad Gateway",
            "Gateway Timeout",
            "Service Unavailable",
            "Database Connection Error",
        ]);
        throw new Error(randomError);
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

export { doSomeHeavyTask };