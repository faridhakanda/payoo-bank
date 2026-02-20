console.log("Login js file connected!");


document.getElementById("login-btn").addEventListener("click", function() {
    //console.log("login button clicked!");
    let mobileNumber = document.getElementById("input-number");
    let pinNumber = document.getElementById("input-pin");
    
    const phoneNumber = mobileNumber.value;
    const otpNumber = pinNumber.value;
    console.log(phoneNumber);
    console.log(otpNumber);
    if (phoneNumber == "0123456789" && otpNumber == "1234") {
        alert("Login Successful!");
        window.location.assign("./home.html");
    } else {
        alert("Login Failed!");
        return;
    }
})