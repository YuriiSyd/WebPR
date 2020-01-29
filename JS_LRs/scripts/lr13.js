function timeToNow(){
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds(); 
  return [ h, m, s ].join(':')
}
alert("Time now " + timeToNow());

function timeToEnd(){
	var endTimeString = document.getElementById("endTime").value;
	var startTimeString = document.getElementById("startTime").value;
	var startTime = new Date("04-01-2020 " + startTimeString);
	var endTime = new Date("04-01-2020 "+ endTimeString);
	var resultTime = (endTime - startTime);
		resultTime = Math.round((resultTime/1000));
	
	var x = document.getElementById('resultTime');	
	x.innerHTML = "Time to end in minutes: " + resultTime;
}