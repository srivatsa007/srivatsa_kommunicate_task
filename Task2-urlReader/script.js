function getUrlParameterValue(url, parameter) {
    // I am using Split to break the URL by "?" to separate the base URL and parameters
    const urlParams = url.split('?')[1].split('&');
    for (let i = 0; i < urlParams.length; i++) {
        const param = urlParams[i].split('='); //  "=" to separate parameter name and value

        if (param[0] === parameter) { // If the parameter name matches the provided parameter
            return param[1];
        }
    }
    // Return null if parameter not found
    return "not found";
}


// Example usage
const url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
const parameter1 = "utm_medium";
const parameter2 = "utm_campaign";

const ans1 = getUrlParameterValue(url, parameter1);
const ans2 = getUrlParameterValue(url, parameter2);

console.log("Value of", parameter1, ":", ans1);
console.log("Value of", parameter2, ":", ans2);

