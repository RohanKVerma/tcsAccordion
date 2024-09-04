const accordion = document.querySelector('.accordionContainer');
accordion.addEventListener('click', function(e){
      for (let i = 0; i < accordion.childElementCount; i++) {
            if (accordion.children[i].classList.contains('active')) {
                  accordion.children[i].classList.toggle('active');
            }
      }
})
      
accordion.addEventListener('click', function(e){
      if (e.target.parentNode.classList.contains('accordionItem')) {
            e.target.parentNode.classList.toggle('active');
      }
      if(e.target.parentNode.classList.contains('collapseBtn')){
            e.target.parentNode.parentNode.classList.toggle('active');
      }
      if(e.target.parentNode.parentNode.classList.contains('heading')){
            e.target.parentNode.parentNode.parentNode.classList.toggle('active');
      }
})
