const reverse = function(original) {
  return original.split('').reverse().join('');
};


let out = '';
process.argv.slice(2).forEach(e => {
  out += reverse(e) + ' ';
});
console.log(out);