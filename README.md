# Verifying that a user can change a texture on the 3D model.

# Video demo of the test running - 
https://www.loom.com/share/95fcd998d6324065b79d096e8f2337a5

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

 - Page Objects - base,page.js
 - Utils- data.js(data driven approach), utility.js(helper methods)
 - Spec File - SmokeTesting.suite.js 
 - Screenshot folder - to save screenshots of the baseline

Below is the screenShot of the current architecture- (Ci/CD component is only for illustration) 

<a href="https://ibb.co/f4DXg6t"><img src="https://i.ibb.co/LnN0Fj6/WDIO-Architecture-1.jpg" alt="WDIO-Architecture-1" border="0"></a>
 
 Below is Spec Report Screenshot which shows which test passed

<a href="https://ibb.co/vwGBzC8"><img src="https://i.ibb.co/5My9cXV/Screen-Shot-2021-04-28-at-3-45-43-PM.png" alt="Screen-Shot-2021-04-28-at-3-45-43-PM" border="0"></a>

Below is screenshot of a future framework architecture- (Scope for improvment) 
<a href="https://ibb.co/8mv28H7"><img src="https://i.ibb.co/FhZJ7FD/Screen-Shot2.png" alt="Screen-Shot2" border="0"></a>


## Challenges

- Lcoators, Frames, 3D Image clicking.


## Running the tests

- Once you install the all teh above mentioned tools do a - `npm test wdio.conf.js` 


# Thank You! 
Rajath Rao 
