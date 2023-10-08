export default function iterateThroughObject(reportWithIterator) {
  const allEmployees = [];
  for (const i of reportWithIterator) {
    allEmployees.push(i);
  }
  return allEmployees.join(' | ');
}
