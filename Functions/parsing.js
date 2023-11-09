function parseAndDisplayName(name) {
  let positionFirstSpace = name.indexOf(" ");

  let first = name.substring(0, positionFirstSpace);
  let positionOfLastNameStart = positionFirstSpace + 1;

  let last = name.substring(positionOfLastNameStart);

  return(`Name: ${name}
First name: ${first}
Last name: ${last}`);

}

console.log(parseAndDisplayName("Brenda Kaye"));
console.log(parseAndDisplayName("Ian Austin"));
console.log(parseAndDisplayName("Siddalee Grace"));
