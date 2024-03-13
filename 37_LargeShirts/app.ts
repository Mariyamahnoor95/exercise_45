function make_shirt(
  size: string = "large",
  message: string = "I love TypeScript"
): void {
  console.log(`This shirt is a ${size} size with the message: "${message}".`);
}

make_shirt();
make_shirt("medium");
make_shirt("small", "Hey, are you ok ");
