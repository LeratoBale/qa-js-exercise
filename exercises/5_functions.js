const exercise5 = () => {
    console.log('Exercise 5');

    // Please Complete Exercise 5 here
    // Write a function `logResult(testName, passed)` that logs pass/fail
    function logResult(testName, result) {
        return result >= 50 ? `${testName} - Passed` : `${testName} - Failed`;
    }
    // result can be changed to value between 0 and 100
    const testName = "Javascript for Beginners";
    const result = 30;
    console.log(logResult(testName, result));

    // Write a function `calculateDuration(startTime, endTime)` that returns elapsed time.
    function calculateDuration(startTime, endTime) {
        const startMinutes = parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]);
        const endMinutes = parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]);

        const durationMinutes = endMinutes >= startMinutes ? endMinutes - startMinutes : endMinutes - startMinutes + 24 * 60;

        const hours = durationMinutes / 60;
        const minutes = durationMinutes % 60;

        return `${hours} hours, ${minutes} minutes`;
    }
    // User input for start and end time
    const startTime = '08:30';
    const endTime = '10:45';
    console.log(calculateDuration(startTime, endTime));

    // abc
    function generateTestReport(testCase) {
    const report = `Test Case Report \nTest Case ID:${testCase.testCaseId} \nTitle: ${testCase.title} \nTest Data: ${testCase.testData} \nExpected Result: ${testCase.expectedResult}\nActual Result: ${testCase.actualResult}\nStatus: ${testCase.status}`;
        return report;
    }
    // An example of input for the test case
    const testCase = {
        testCaseId: 'TC_001',
        title: 'Login Functionality',
        testData: 'Username: user1, Password: password123',
        expectedResult: 'User should be able to login successfully',
        actualResult: 'User logged in successfully',
        status: 'Failed',
    };

    console.log(generateTestReport(testCase));


    // End of Exercise 5
    console.log("Exercise 5 completed");
}


module.exports = exercise5;