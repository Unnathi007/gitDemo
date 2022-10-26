// export must be written in order for the functions or classes to be imported in other files
// in order to enable modules usage, we have to alter the contents of package.json
// to create package.json, run npm init --yes command in the working dir
// then add "type" : "module" as a key value pair in the existing contents of the package.json file
export function function1(){
    console.log('function 1 is executed')
}

export function function2(){
    console.log('function 2 is executed')
}