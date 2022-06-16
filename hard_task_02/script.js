const abMin = () => {
  let min = (a > b) * b + (b > a) * a;
  return min;
}

const a = +prompt('Введите первое число: ', '');
const b = +prompt('Введите второе число: ', '');
alert(abMin())