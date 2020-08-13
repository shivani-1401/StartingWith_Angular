# Angular assignment on interpolation with Array of Employee objects and ngIf structural directive

## Objective:

The Objective of this application is to understand the fundamentals of intepolation of data in angular after creating an array of employee objects and usage of ngIf

## Expected Outcome:

By the end of the assignment you should be able to understand

1. Modules
2. Components
3. Array of objects
4. ngFor and ngIf structural directive


## Prerequisites


1. Fork the boilerplate repository.
2. Clone the boilerplate repository and move into the project folder with cd command.
3. Install dependencies `npm install`.
4. Run the code with `npm run start` which will run on port:4200.

## Assignment

Create an Angular application which will display the hard coded value for an employee object's array.

1. We need to define an Employee class and create an array of objects of the Employee class in the parameterless constructor of Component class. Employee class will have following
   members.


  <table>
  <tr><th>variable</th><th>type</th></tr>
  <tr><td>id</td><td>number</td></tr>
  <tr><td>firstname</td><td>string</td></tr>
  <tr><td>lastname</td><td>string</td></tr> 
  <tr><td>address</td><td>string</td></tr> 
  <tr><td>email</td><td>string</td></tr> 
  <tr><td>password</td><td>string</td></tr> 
  <tr><td>gender</td><td>string</td></tr> 
  <tr><td>date_of_birth</td><td>string</td></tr> 
  </table>
2. Create a parameterized constructor in the Employee class and pass the data for all the members while creating the array of objects within the constructor of the Component class.
  
3. The Component class in this assignment will be having two members:
  
 <table>
  <tr><th>variable</th><th>type</th></tr>
  <tr><td>title</td><td>string</td></tr>
  <tr><td>employee</td><td>Employee[]</td></tr>
  <table>

4. title will be having the value as `Registration details`. 
5. We will be having 4 employee objects with the data as follows:

            `1,Raghav,Singh,A/22 Gaziabad,raghavsingh@gmail.com,raghav@123,Male,22-Aug-1990
             2,Sujit,Kumar,Kanpur,sujitkumar@rediffmail.com,sujitkumar@123,Male,12-Nov-1981
             3,Payel,Dutta,Kolkata,payeldutta@gmail.com,payel@123,Female,12-Mar-1985
             4,Murali,Naidu,Chennai,muralinaidu@gmail.com,muralinaidu@123,Male,05-Jun-1989"`


## Instructions:

1. You are expecteded to display title with h1 header tag of HTML.
2. Rest of the details should be displayed within a table and only the records of the male employees should be displayed.
3. Ensure following commands succeed in your local machine before submitting your code for preliminary review as described next-

npm install \
npm run build \
npm run lint \
npm run test \
npm run e2e

## Submitting your solution for preliminary automated review

1. Open `https://hobbes.stackroute.in/#` and login into the platform.
2. Under `Assignment repository` select   , and branch `master`.
3. Under `Your solution repository`select your own repository and branch.
4. Press `Submit`.
5. Press `click here` for the feedback.
6. Evaluation will take some minimal time to complete after which you need to refresh your browser and get the update status.
7. Watch out for your total score and detailed status on each test and eslint errors in the coloured blocks on the screen.
8. Fix failing test cases as well as eslint errors and re-submit your solution ( you may skip any eslint errors reported in the provided spec files).


## MENTORS TO BEGIN REVIEW YOUR WORK ONLY AFTER ->

- You add the respective Mentor as a Reporter into your Assignment Repository.
- You have checked your assignment on the Automated Evaluation Tool - Hobbes ( Check for necessary steps in your Boilerplate - README.md. file.) and got the required score - Check with your mentor about the Score you must achieve before it is accepted for Manual Submission.
- Intimate your mentor on Slack and/or send an email to learner.support@stackroute.in - with your Git URL - Once you are done working and are ready for final submission.


## References:

1. [Angular Architecture] (https://angular.io/guide/architecture)
2. [Angular CLI] ( https://cli.angular.io/)
3. [Angular Templates] ( https://angular.io/guide/architecture#templates)
4. [Angular Interpolation] ( https://angular.io/guide/template-syntax)








