
class BasePage{
    //this can be used to switch to the frame we need 
    frame(){
        return $('body > iframe:nth-child(1)');
    }

    // design button 
    designButton(){
        return $('//div[@name="design"]');
    }
 walls(){
     return $('(//div[@role = "button"]/descendant::div)[1]');
 }

wall(){
    return $('//div[@data-selenium="macheteViewerContainer"]/canvas');
}
 roof(){
     return $('// div[text()="roof"]');
 }
    
 horizontalSliding(){
     return $('//div[@data-selenium="attributeExtraText" and text()="Horizontal Siding"]');
 }
 horSliding1(){
     return $('//div[@data-selenium="breadcrumbs"] /div[5]');
 }
 brick(){
     return $('//div[@data-selenium="extendedSidebar"]/div/div/div[4]/div[1]');
 }
 pacificClay(){
     return $('//div[@data-selenium="extendedSidebar"]/div/div[2]/div[1]');
 }
 modularFaceBrick(){
     return $('//div[text()="Modular Face Brick"]//preceding-sibling::div');
 }
 roseTan(){
     return $('//div[text()="Rose Tan"]//preceding-sibling::div');
 }

}


module.exports = new BasePage();
