module.exports = function check(str, bracketsConfig) {
  let pattern = [];
  let controlStr = str;

  bracketsConfig.forEach(element => pattern.push(`${element[0]}${element[1]}`));

  while (true) {
    for (let i of pattern)
      str = str.replace(i, '');

    if (str.length === 0)
      return true;
    if (str === controlStr)
      return false;

    controlStr = str;
  }
}
