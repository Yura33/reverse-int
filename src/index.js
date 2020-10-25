module.exports = function reverse (n) {
    let num = [...(n.toString())].reverse().join('');
  if(num[num.length-1]==='-') {
    return num.slice(0, -1);
  } else {
    return num;
  }
}
