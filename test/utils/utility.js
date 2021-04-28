const BasePage = require('../pageobjects/base.page');
class Utils {
	//Switch to Frame passing the xpath/selector of the frame
	switchToAFrame(xpath) {
		return browser.switchToFrame($(xpath));
	}
	//navigate to URL
	gotoURL(URL) {
		return browser.url(URL);
	}
	//get page title
	getTitle() {
		return browser.getTitle();
	}
	//browser pause 
	pause(millisec) {
		return browser.pause(millisec);
	}
	//compares the image before and after for changes
	imageComparator() {
		let val = 0;
		let comparator = browser.checkElement(BasePage.wall(),'Rose_Tan_Image_Check',{/* some options */});
		if (comparator > val) {
			console.log('****The value of the image change score is***** ' + comparator);
			return true;
		} else {
			console.log('****The value of the image change score is***** ' + comparator);
			return false;
		}
	}
}

module.exports = new Utils();
