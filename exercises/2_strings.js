const exercise2 = ()=>
    {
        console.log('Exercise 2');

        // Please Complete Exercise 2 here
        // A string representing a response message
        let response = " You have passed the test, Congratulations!"
        // Clean up whitespace and convert it to lowercase.
        let lowerCaseResponse = response.trim().toLowerCase()
        console.log(lowerCaseResponse);
        // Check if certain keywords exist
        console.log("Does response include failed? : ",lowerCaseResponse.trim().includes("failed"));
        // Replace part of the string with another word 
        let updatedResponse = lowerCaseResponse.replace("congratulations", "well done");
        console.log(updatedResponse)
        // End of Exercise 2
        console.log("Exercise 2 completed");
    }

module.exports = exercise2;