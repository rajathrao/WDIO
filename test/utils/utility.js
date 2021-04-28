
const BasePage = require('../pageobjects/base.page');
class Utils{
//Switch to Frame passing the xpath/selector of the frame
switchToAFrame(xpath) {
    return browser.switchToFrame($(xpath));
  }

gotoURL(URL){
  return browser.url(URL);
}

getTitle(){
  return browser.getTitle();
}
pause(millisec){
  browser.pause(millisec);
}
imageComparator(){
  let val=0;
  let comparator = browser.checkElement((BasePage.wall()), 'Rose_Tan_Image_Check', { /* some options */ });
if(comparator>val){
  return true;
}
else{
  return false;
}

}

}


module.exports = new Utils();