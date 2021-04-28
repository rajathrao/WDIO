# Hover 3D model Scenario
# Installation
- [x] Install Visual Studio code 
- [x] Install node/yarn 
- [x] Clone the project from github
- [X] Do a `npm install` or `yarn install` <br/>
[PS - In case you have trouble installing reach out to rajath.vp@gmail.com (look at the package.json for info about versions)]

## Task/Test Scenarios

- [x] Given I on this 3D model page (https://hover.to/shared/vNkmvkrcwfK8RDx_P8m9)
- [x] And I am in design mode
- [x] And I select any wall of the house
- [x] And I select “Brick” material
- [x] And I select “Pacific Clay” brand
- [x] And I select “Modular Face Brick” product
- [x] And I select “Rose Tan” color
- [x] Then the wall changes to that product

**Task is to automate test cases using the selenium library**


## Scope

- [x] Create a Smoke Testing Suite using WDIO - JS based Library

- [x] Working test suite with the above Scenarios

## Future Scope
The future enchancements may include the following 

 - Improve the current framework by making it more modular
 - Add Data Reading and writing capabilities and make this a Hybrid Framework- Add libararies like Apache POI to read and write data
 - Add CI/CD capabalities
 - Implement design patterns like Proxy Design Patterns, Factory Design Pattern, Singleton and More.....
 
 ## Tools
 
 The following tools/languages/ libraries have been used
 
 <ul type="square">
<li>Visual Studio Code for Writing the code</li>
<li>JavaScript for programming </li>
<li>WDIO for automating the test cases</li>
<li>Mocha and Chai Testing Framework</li>
<li>Dot Reprot</li>
<li>Node for Dependency Management</li>
</ul>



### NOTE - The test cases are detailed in the code

## Design Approach

I have created a framework which will eventually look like the below diagram. 

 - Page Objects - there is a BasePage that has all the elements
 - Spec File - Used to run the testcases

 
Below is screenshot of a future framework architecture- 
<a href="https://ibb.co/8mv28H7"><img src="https://i.ibb.co/FhZJ7FD/Screen-Shot2.png" alt="Screen-Shot2" border="0"></a>

Below is Spec Report Screenshot which shows which test passed

<a href="https://ibb.co/DgL9XJ8"><img src="https://i.ibb.co/zHNXcM7/Screen-Shot-2021-04-27-at-11-43-00-PM.png" alt="Screen-Shot-2021-04-27-at-11-43-00-PM" border="0"></a>

## Challenges

- Unable to Click on the 3D image. Did it with mouse action but not effective


## Running the tests

- Once you install the all teh above mentioned tools do a - `npm test wdio.conf.js` 


# Thank You! 
Rajath Rao 
