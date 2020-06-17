var cleanRoom = function(){
    return new Promise((resolve, reject)=>{
        resolve("Cleaned the room");
    })
}

var removeGarbage = function(msg){
    return new Promise((resolve ,reject)=>{
        resolve(msg + "removed garbage");
    })
}

var wonIceCream = function(msg){
    return new Promise((resolve, reject)=>{
        resolve(msg + "Won the iceCream");
    })
}

cleanRoom().then(msg => {
    return removeGarbage(msg)
}).then(msg => {
    return wonIceCream(msg)
}).then(msg => {
    console.log(msg);
})