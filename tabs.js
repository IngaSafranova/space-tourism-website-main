const tabLists = document.querySelector('[role="tablist"]');
const tabs = tabLists.querySelectorAll('[role="tab"]');

let tabFocus = 0;

//  tabindex makes element focusable, allow or prevent navigation with Tab 
// 0 - means focused 
// -1 - not focused

tabLists.addEventListener('keydown', changeTabFocus )
    
   function changeTabFocus(event){
    // all keys has they numbers
    const keydownLeft = 37;
    const keydownRight = 39;


    // change the tabindex of the current tab to -1
    if (event.keyCode === keydownLeft || event.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute('tabindex', -1);
    }
    
    // if the right key is pushed, move to the next tab on the right
    if(event.keyCode === keydownRight){
        tabFocus++;
        if (tabFocus >= tabs.length){
            tabFocus = 0;
        }
        console.log(tabFocus)
    }
    // if the left key is pushed, move to the next tab on the left
if (event.keyCode === keydownLeft){
    tabFocus--;
    if (tabFocus < 0 ){
        tabFocus = tabs.length -1
    }
}

tabs[tabFocus].setAttribute('tabindex', 0);
tabs[tabFocus].focus();
}
 
    
    