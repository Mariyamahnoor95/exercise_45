let ordinal_number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let ordinalNumd of ordinal_number) {
  if (ordinalNumd === 1) {
    console.log(`${ordinalNumd}st`);
  } else if (ordinalNumd === 2) {
    console.log(`${ordinalNumd}nd`);
  } else if (ordinalNumd === 3) {
    console.log(`${ordinalNumd}rd`);
  } else {
    console.log(`${ordinalNumd}th`);
  }
}
