const exercise4 = ()=>
    {
        console.log('Exercise 4');

        // Please Complete Exercise 4 here
        // Create an array of 5 QA test steps.
        let testSteps = [
            "Open the banking application",
            "Navigate to the login page",
            "Enter the username and password",
            "Click on the login button",
            "Verify the dashboard is displayed"
        ];
        
        // Log each step with its index
        testSteps.forEach((step, index) => {
            console.log(`Step ${index + 1}: ${step}`);
        });

        // Use `map()` to convert each step to uppercase.
        let upperCaseSteps = testSteps.map(step => step.toUpperCase());

        //Use a `for` loop to simulate step execution 
        for (let i = 0; i < upperCaseSteps.length; i++) {
            console.log(`Executing step ${i + 1}: ${upperCaseSteps[i]}`);
        }
        // End of Exercise 4
        console.log("Exercise 4 completed");
    }   

module.exports = exercise4;
