export default function cleanSet(set, startString) {
  const array = [];
  if (startString === '') {
    return '';
  }
  for (const member of set) {
    if (member.startsWith(startString)) {
      array.push(member.slice(startString.length));
    }
  }
  return array.join('-');
}
