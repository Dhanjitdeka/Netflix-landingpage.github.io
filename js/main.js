const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select tab content item
function selectItem(e){
    //remove all show and border classes
    removeBorder();
    removeShow();
    //add border to current tab-item
    this.classList.add('tab-border');
    //grab content item from dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItem.classList.add('show');
}

//remove bottom borders from all tab items
function removeBorder(){
    tabItems.forEach(item=>{
        item.classList.remove('tab-border');
    });
}
//remove show class from all content items
function removeShow(){
    tabContentItems.forEach(item=>{
        item.classList.remove('show');
    });
}

//listen for tab item click
tabItems.forEach(item=>{
    item.addEventListener('click',selectItem);
});