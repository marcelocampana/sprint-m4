export async function fechData(apiUrl, options) {
  const response = await fetch(apiUrl, options);
  const data = await response.json();
  return data;
}
