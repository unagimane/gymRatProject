//User Class
export default class User {
    constructor(name, age, gender, height, userWeight, goalWeight) {
        this.name = name
        this.age = age
        this.gender = gender
        this.height = height
        this.userWeight = userWeight
        this.goalWeight = goalWeight
    }
    
}

//User Variables
const userDetails = document.getElementById('accountDetails')
const name = document.getElementById('name');
const age = document.getElementById('age');
const gender = document.getElementById('gen');
const height = document.getElementById('height');
const userWeight = document.getElementById('userWeight');
const goalWeight= document.getElementById('goalWeight');
const userButton = document.getElementById('submitUser');

//Get User Details
const newUser = () => {
    const getUserDetails = new User(name.value, age.value, gender.value, height.value, userWeight.value, goalWeight.value);
    localStorage.setItem(name.value, JSON.stringify(getUserDetails));
    console.log(getUserDetails);
    userDetails.reset();
}

//Submit User Details Button
userButton.addEventListener('click', newUser);

