export async function urlToFile(url) {
  if (url == null) {
    return null;
  }

  const response = await fetch(url);

  const blob = await response.blob();

  const filename = url.split("/").pop();

  const mimeType = blob.type || "application/octet-stream";

  return new File([blob], filename, { type: mimeType });
}
