var UndergroundSystem = function () {
  this.transaction = new Map();
  this.average = new Map();
};

UndergroundSystem.prototype.checkIn = function (id, startStation, timeIn) {
  this.transaction.set(id, {start: startStation, time_in: timeIn})
  if(!this.average.has(startStation)) this.average.set(startStation, new Map())
};

UndergroundSystem.prototype.checkOut = function (id, st2, timeOut) {
  let st1 = this.transaction.get(id).start;
  let trip = timeOut - this.transaction.get(id).time_in;
  if(!this.average.get(st1).get(st2)) this.average.get(st1).set(st2, [trip])
  else this.average.get(st1).get(st2).push(trip)
};

UndergroundSystem.prototype.getAverageTime = function (start_station, end_station) {
  return (this.average.get(start_station).get(end_station).reduce((acc, el) => acc + el, 0) / this.average.get(start_station).get(end_station).length).toFixed(5);
};


// ================LOGS===================
var TaskToBeExecuted = function() {
  var undergroundSystem = new UndergroundSystem();
  undergroundSystem.checkIn(45, "Leyton", 3);
  undergroundSystem.checkIn(32, "Paradise", 8);
  undergroundSystem.checkIn(27, "Leyton", 10);
  undergroundSystem.checkOut(45, "Waterloo", 15);
  console.log(undergroundSystem)
  undergroundSystem.checkOut(27, "Waterloo", 20);
  undergroundSystem.checkOut(32, "Cambridge", 22);
  console.log("should be 14.00000: ", undergroundSystem.getAverageTime("Paradise", "Cambridge"));
  console.log("should be 11.0000: ", undergroundSystem.getAverageTime("Leyton", "Waterloo"));
  undergroundSystem.checkIn(10, "Leyton", 24);
  console.log("should be 11.00000: ", undergroundSystem.getAverageTime("Leyton", "Waterloo"));
  undergroundSystem.checkOut(10, "Waterloo", 38);
  console.log("should be 12.00000: ", undergroundSystem.getAverageTime("Leyton", "Waterloo"));
};

function StandardBenchmark(toMeasure,repeatTimes){
  if(typeof(repeatTimes) != "number"){
    repeatTimes = 1;
  }

  if(typeof(toMeasure) === "function"){
      var start_status = performance.now();
      var total_taken = 0;
      for(var i = 0;i < repeatTimes;i++){
        var startTimeSubtask = performance.now();
        toMeasure.call();
        var endTimeSubtask = performance.now();
        total_taken += (endTimeSubtask -startTimeSubtask);
      }
      var final_status = performance.now();
  }

  return {
    totalMilliseconds: (final_status - start_status),
    averageMillisecondsPerTask: total_taken / repeatTimes
  };
}

var TestResult = new StandardBenchmark(TaskToBeExecuted,1);
console.log(TestResult);