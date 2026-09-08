

//Create two functions : launchBrowser, runTests where,
 //a) launchBrowser need to take input as browserName (string) and do not return any
 //- use if-else (chrome or otherwise)
 //- Print the value
 //b) runTests need to take input as testType (string) and do not return any
 //- use switch case (smoke, sanity, regression, default (smoke))
 //- Print the values
//Call that function from the javascript



function launchBrowser(browserName){
    if (browserName == 'chrome'){
        console.log ('Browser is lunched with '+ browserName)
    }else{
        console.log  ('Browser is lunched with '+ browserName)
    }
}
function runTests(testType){
    switch (testType) {
        case 'sanity':
            console.log('Test type is '+ testType)
            break;
        case 'regression':
            console.log('Test type is '+ testType)
            break;
        default:
            console.log('Test type is '+ testType)
            break;
    }
}
let browserName= 'chrome'
launchBrowser(browserName)

let testType= 'smoke'
runTests(testType)