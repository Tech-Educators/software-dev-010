

let array = [
    { name: "sam", score: 100 },
    { name: "mas", score: 75 },
    { name: "ams", score: 25 },
    { name: "assms", score: 0 },
  ];
  
  let result = Object.groupBy(array, function ({ score }) {
    return score > 50 ? "good" : "urbad";
  })
  
  console.log(result);