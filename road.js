var roadWorks = (function() {

  // Think
  // generate a block of varying width (between two ranges)
  // move the block on every tick
  // when the right end of the block is past the right end of the stage, a new
  // block can be created
  // when the right end of the block is past the left edge of the stage, the
  // block is removed
  // at any point in time, a block or gap may be at point x, this should be
  // exposed
  var roadEl = document.querySelector('#road');
  var roadWidth = roadEl.getBoundingClientRect().width;

  // * -> <li>
  function Block() {

    var blockEl = document.createElement('li');
    var left = roadWidth;
    blockEl.className   = 'road-block';
    blockEl.style.width = '100px';
    blockEl.style.left  = left + 'px';

    return {
      el : blockEl,
      move : function move() {

        console.log('move');
        left = left - 5;
        blockEl.style.left = left + 'px';

      }
    };

  };

  var block = new Block();

  roadEl.appendChild(block.el);

  function onTick() {

    block.move();
    

  }
  
  return { onTick : onTick };

}());
