const accordionItems = document.querySelectorAll('.accordionItem');
accordionItems.forEach(item => {
      item.classList.remove('active');
           
      item.addEventListener('click', function(){
            accordionItems.forEach((otherItem) =>{
                  if(otherItem !== item){
                        otherItem.classList.remove('active');
                  }
            })  
            this.classList.toggle('active');
      })
})