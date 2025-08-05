function reverse(number) {
  const isNegative = number < 0;
  const reversed = Math.abs(number)
    .toString()
    .split('')
    .reverse()
    .join('');
    
  return isNegative ? -Number(reversed) : Number(reversed);
}
