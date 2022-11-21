//Lift Class
export default class Lift {
    constructor(liftDate, exercise, liftWeight, reps) {
        this.liftDate = liftDate
        this.exercise = exercise
        this.liftWeight = liftWeight
        this.reps = reps

    }
    
}

//Lift Variables
const liftDetails = document.getElementById('liftDetails');
const liftDate = document.getElementById('liftDate');
const exercise = document.getElementById('exercise');
const liftWeight = document.getElementById('liftWeight');
const reps = document.getElementById('reps');
const liftButton= document.getElementById('liftButton');

//Get Lift Details
const newLift = () => {
    const getLiftDetails = new Lift(liftDate.value, exercise.value, liftWeight.value, reps.value);
    localStorage.setItem(liftDate.value, JSON.stringify(getLiftDetails));
    console.log(getLiftDetails);
    liftDetails.reset();

}

//Submit Lift Details Button
liftButton.addEventListener('click', newLift);
