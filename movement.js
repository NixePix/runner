var player = function() {
   var element;
   return {
      current_x : 0,
      current_y : 0,
      move_up : function(dy) {
         this.current_y = this.current_y - dy;
      },
      assign_element: function( el ) {
         element = el;
         this.current_y = element.offset().top;
         this.current_x = element.offset().left;
         document.player = this;
         document.addEventListener("keydown", function(e) {
            document.player.move_up(5); document.player.update()} );
      },
      update : function() {
         element.offset({ top: this.current_y, left: this.current_x } );
      },
      on_tick: function() {
         move_up(-2);
         update();
      }
   }
}();




	

