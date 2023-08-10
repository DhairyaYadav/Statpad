function moreVis() {
    document.getElementById("more-content").style.display = 'block';
    document.getElementById("more").style.fontSize = 'small';
    
  }
  function moreInVis() {
    document.getElementById("more-content").style.display = 'none';
    document.getElementById("more").style.fontSize = '2.3rem';
  }
  
  
  document.getElementById("more").addEventListener("mouseover",moreVis);
  document.getElementById("more").addEventListener('mouseout',moreInVis);