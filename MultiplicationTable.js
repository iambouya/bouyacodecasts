// MultiplicationTable.js
// Bouya
// A program used to generate a mutilplication table
// Run: node MultiplicationTable.js

const rl = require ("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter number = ", function(base){
  rl.close();
  for(var i=1; i<=12; i++) {
    console.log(`${base} x ${i} = `, base * i)
  }
})