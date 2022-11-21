//Run Class
export default class Run {
    constructor(runDate, time, distance) {
        this.runDate = runDate
        this.time = time
        this.distance = distance
    }
    
}

//Run Variables
const runDetails = document.getElementById('runDetails')
const runDate = document.getElementById('runDate');
const time = document.getElementById('time');
const distance = document.getElementById('distance');
const runButton = document.getElementById('runButton');

//Get Run Details
const newRun = () => {
    const getRunDetails = new Run(runDate.value, time.value, distance.value);
    localStorage.setItem(runDate.value, JSON.stringify(getRunDetails));
    console.log(getRunDetails);
    runDetails.reset();
}

//Submit Run Details Button
runButton.addEventListener('click', newRun);

