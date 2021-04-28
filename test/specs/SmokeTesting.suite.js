const { expect } = require('chai');
const BasePage = require('../pageobjects/base.page');
const Util = require('../utils/utility');
const Data = require('../utils/data');
describe('Smoke Test: verifying that a user can change a texture on the 3D model :-', () => {
	it('Should validate that the user is on 3D model page', () => {
		Util.gotoURL(Data.endpointurl);
		console.log(Util.getTitle());
		expect(Util.getTitle()).to.contain('HOVER - 789 Hover Lane');
	});
	it('Should Display the Design Button and Click on it', () => {
		Util.switchToAFrame(BasePage.frame());
		Util.pause(4000);
		expect(BasePage.designButton().isDisplayed()).to.be.true;
		BasePage.designButton().click();
		const wallText = BasePage.walls().getText();
		expect(wallText).to.contain('Walls');
	});

	it('should click on one of the walls', () => {
		BasePage.wall().click({ x: 20, y: 90 });
		Util.pause(2000);
		expect(BasePage.horSliding1().isDisplayed()).to.be.true;
		//browser.debug();
	});

	it('should select Brick Material', () => {
		BasePage.horizontalSliding().click();
		BasePage.brick().click();
		expect(BasePage.pacificClay().isDisplayed()).to.be.true;
	});
	it('should select the Pacific Clay brand', () => {
		BasePage.pacificClay().click();
		expect(BasePage.modularFaceBrick().isDisplayed()).to.be.true;
	});
	it('should select the Modular Face Brick Product', () => {
		BasePage.modularFaceBrick().click();
		expect(BasePage.roseTan().isDisplayed()).to.be.true;
	});
	it('should click on the Rose Tan Color and validate that the color is changed', () => {
		Util.imageComparator();
		Util.pause(4000);
		BasePage.roseTan().click();
		Util.pause(4000);
		expect(Util.imageComparator()).to.be.true;
	});
});
