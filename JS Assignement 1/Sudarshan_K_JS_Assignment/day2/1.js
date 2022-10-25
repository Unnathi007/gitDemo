function foo(username,password){
    if (username === 'Username' && password === 'P@ssword')
        console.log("Success")
    else
        console.log("login fail")
    if ("10"===10)
        console.log("doesnt work")
    else
        console.log("'===' = checks data type and value")
    
    if ("10" == 10)
        console.log("'== 'checks only value")
    else
        console.log("doesnt work")
}

foo("Username","P@ssword")