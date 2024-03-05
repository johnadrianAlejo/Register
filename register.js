let txtUsername = document.querySelector("#txtUsername")
let txtPassword = document.querySelector("#txtPassword")
let txtConfirmPassword = document.querySelector("#txtConfirmPassword")
let btnRegister = document.querySelector("#btnRegister")


btnRegister.onclick = function () {
    Registerister(txtUsername.value, txtPassword.value, txtConfirmPassword.value)
}

function Registerister (Username, Password, ConfirmPassword) {
    // if..else if ...else
    // conditional operator (greater than >, less than<, equal ==, not !,
    // not equal !=

    console.log(Username, Password, ConfirmPassword)

    if(Password == ConfirmPassword && Password!= "" && ConfirmPassword !=""){
        return console.log("Password match!")

    }else if(Password == ""|| ConfirmPassword== ""){
        return console.log("Password must  not be empty.")
        
    } else {
        return console.log("Password does not match.")
    }
}

