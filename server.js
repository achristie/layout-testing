var data = require('./test123.js');
let i = 0;

parseData = (acc, cur) => {
  if (i > 5) return acc;
  i++;
  console.log(cur.taskDefinitionArn, cur.containerInstanceArn);
  if (acc[cur.taskDefintionArn]) {
    acc[cur.taskDefinitionArn].push(cur.containerInstanceArn);
  } else {
    acc[cur.taskDefinitionArn] = [];
    acc[cur.taskDefinitionArn].push(cur.containerInstanceArn);
  }
  return acc
}

parseData2 = (acc, cur) => {
  if (acc[cur.containerInstanceArn]) {
    acc[cur.containerInstanceArn].push(cur.taskDefinitionArn);
  } else {
    acc[cur.containerInstanceArn] = [cur.taskDefinitionArn];
  }
  return acc;
}

// console.log(data.tasks[5]);

var out = data.tasks.reduce(parseData2, {});

console.log(out);