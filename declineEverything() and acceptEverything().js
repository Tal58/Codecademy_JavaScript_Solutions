const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

function declineEverything(arr) {
        arr.forEach(politelyDecline) }

declineEverything(veggies);

function acceptEverything(str) {
    for (const x of str){
        console.log(`Ok, I guess I will eat some ${x}.`)
    }
}
acceptEverything(veggies);