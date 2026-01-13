function fetchWithTimeout(url, options = {}, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  return fetch(url, { ...options, signal: controller.signal }).finally(() =>
    clearTimeout(id)
  );
}

async function fetchWithRetry(
  url,
  options = {},
  retries = 3,
  timeout = 5000,
  backoff = 500
) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      if (!response.ok) {
        if (response.status >= 500 && attempt < retries) {
          throw new Error("Server Error");
        }
        return response;
      }
      return response;
    } catch (error) {
      if (error.name === "AbortError") {
        console.warn("Request timed out");
      }

      if (attempt === retries) {
        throw error;
      }

      await new Promise((res) =>
        setTimeout(res, backoff * Math.pow(2, attempt))
      );
    } finally {
      clearTimeout(id);
    }
  }
}
