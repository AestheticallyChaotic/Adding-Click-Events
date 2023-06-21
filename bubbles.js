AFRAME.registerComponent("bubbles", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `ring${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createRings(id, position);
      }
    } ,
  
    createRings: function(id, position) { 
      
      var islandEl = document.querySelector("#island");
  
      var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id",id);
      ringEl.setAttribute("position",position);

      ringEl.setAttribute("animation-mixer",{})
  
      islandEl.appendChild(ringEl);
    }
  });  