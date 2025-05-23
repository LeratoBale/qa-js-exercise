function exercise1()
    {
        console.log('Exercise 1');

        // Please Complete Exercise 1 here
        // Below is the first variable that will be changed as per instructions
        let testType = "Semester Test";
        console.log(testType); 
        let timeToTakeTest = 2.00;
        console.log(timeToTakeTest + " is a " + typeof timeToTakeTest);
        let result = true;
        console.log(result + " is a " + typeof result);
        const absentStudent = null;
        console.log(absentStudent + " is an " + typeof absentStudent)
        let nextTest;
        console.log(nextTest + " is "+ typeof nextTest)

        // Below is the changed string
        testType = "Final Exam";
        console.log(testType + " is a " + typeof testType);
        // End of Exercise 1
        console.log("Exercise 1 completed");
    }

module.exports = exercise1;