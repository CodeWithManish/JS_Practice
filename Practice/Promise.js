
function Prom(complete){
        
    return new Promise(function (resolve, reject) {
        if (complete) {
            resolve("Execution successful");
        } else {
            reject("Execution Failed");
        }
    });
 
}
let onfulfilment = (result) =>{
    console.log(result);
}

let onRejection = (error) => {
    console.log(error);
}

Prom(true).then(onfulfilment);
Prom(true).catch(onRejection);