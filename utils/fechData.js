export async function fechData(apiUrl, options) {
  const response = await fetch(apiUrl, options);
  const data = await response.json();
  console.log(data);
  return data;
}
