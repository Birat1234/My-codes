function SleepIn(weekday,weekend) {

  return(weekday && weekend || !weekday && weekend);
}

function stringTimes(string, num) {
  for (var i = 0; i < num; i++) {
    console.log(string);
  }
}

function luckysum(a,b,c) {

  if (a == 13) {
    return 0
  }else if (b == 13) {
    return a;
  }else if (c == 13) {
    return a+b;
  }else {
    return a+b+c;
  }

}
