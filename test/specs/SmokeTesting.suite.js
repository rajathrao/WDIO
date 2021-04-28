const { expect } = require('chai');
const BasePage = require('../pageobjects/base.page');
var should = require('chai').should();
describe('Smoke Test: Ability to Edit the 3D model', () => {
	it('Should Display the Design Button and Click on it', () => {
		browser.url('https://hover.to/shared/vNkmvkrcwfK8RDx_P8m9');
		//const frame = $('body > iframe:nth-child(1)');
		browser.switchToFrame(BasePage.frame());
		browser.pause(5000);
		BasePage.designButton().isDisplayed();
		BasePage.designButton().click();
		const wallText = BasePage.wall().getText();

		console.log('your text on the wall is ' + wallText);
		expect(wallText).to.contain('Wall');
		browser.pause(4000);
		//BasePage.wall().click({ x: 50,y:60 })
		// BasePage.horSliding1().click();
		// BasePage.horizontalSliding().click();
		// BasePage.brick().click();
		// BasePage.pacificClay().click()
		// BasePage.modularFaceBrick().click();
		// browser.debug();
		//  browser.pause(5000);
	});

	it('should click on the Horizontal sliding', () => {
		BasePage.horSliding1().click();
		BasePage.horizontalSliding().click();
		expect(BasePage.brick().isDisplayed()).to.be.true;
	});
	it('should click on the Brick', () => {
		BasePage.brick().click();
		expect(BasePage.pacificClay().isDisplayed()).to.be.true;
	});
	it('should click on the Pacific Clay', () => {
		BasePage.pacificClay().click();
		expect(BasePage.modularFaceBrick().isDisplayed()).to.be.true;
	});
	it('should click on the Modular faceBrick', () => {
		BasePage.modularFaceBrick().click();
		expect(BasePage.roseTan().isDisplayed()).to.be.true;
	});
	it('should click on the rose tan', () => {
		BasePage.roseTan().click();
	//	browser.debug();
		//expect(BasePage.roseTan().isDisplayed()).to.be.true;
	});

	//  expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
});
