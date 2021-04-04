addEventListener("fetch", (event) => {
  const response = new Response("Hello Deno World!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
