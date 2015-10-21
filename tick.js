var startDate = new Date().getTime();

function tick() {

  // do something every 100ms here
  var diff = new Date().getTime() - startDate;
  //console.log(diff);

  roadWorks.onTick();

}

setInterval(tick, 100);
