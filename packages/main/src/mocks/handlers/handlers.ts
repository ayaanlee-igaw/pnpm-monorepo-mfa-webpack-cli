import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://web-api/main-test", ({ request, params, cookies }) => {
    return HttpResponse.json({
      user: {
        id: "main-123",
        name: "Ayaan",
      },
    });
  }),
];
