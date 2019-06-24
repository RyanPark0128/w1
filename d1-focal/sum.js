const sum = function(a, b) {
  const c = Number(a);
  const d = Number(b);
  return  (c + d);
};

console.log(sum(process.argv[2], process.argv[3]));