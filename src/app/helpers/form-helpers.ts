export function cleanEmptyFields(data): void {
  Object.keys(data).forEach(
    (key) => (data[key] === null || data[key] === '' || data[key] === undefined ||  data[key].length === 0) && delete data[key]
  );
}
