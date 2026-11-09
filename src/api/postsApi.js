export async function fetchPosts(signal) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { signal });
  
  if (!response.ok) {
    throw new Error(`HTTP Error! Status: ${response.status}`);
  }
  
  const data = await response.json();
  return data;
}
