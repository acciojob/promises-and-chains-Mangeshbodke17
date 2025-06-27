let age = document.querySelector("#age");
let nameInput = document.querySelector("#name");
let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    const userAge = age.value.trim();
    const userName = nameInput.value.trim();

    // Validation
    if (userAge === "" || userName === "") {
        alert("Please enter valid details");
        return;
    }

    // Convert age to number
    const ageNum = Number(userAge);

    // Promise
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageNum > 18) {
                resolve(`Welcome, ${userName}. You can vote.`);
            } else {
                reject(`Oh sorry ${userName}. You aren't old enough.`);
            }
        }, 4000);
    })
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
