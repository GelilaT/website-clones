const tabitems=document.querySelectorAll('.tab-item');
const tabcontentitems=document.querySelectorAll('.tab-content-item');
//select tab content item
function selectItem(e){
    removeBorder();
    removeshow()
    //add border to current tab
    this.classList.add('tab-border');
    //grab content item from the dom
    const tabcontentitem=document.querySelector(`#${this.id}-content`)
    //add show class
    tabcontentitem.classList.add('show')
}
function removeBorder(){
    tabitems.forEach(item=> item.classList.remove('tab-border'))
}
function removeshow(){
    tabcontentitems.forEach(item=> item.classList.remove('show'))
}
//listen for tab click
tabitems.forEach(item=> item.addEventListener('click',selectItem))
