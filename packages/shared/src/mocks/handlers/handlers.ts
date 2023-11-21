import { http, HttpResponse } from "msw";

export const designSystemComponentsHandlers = [
  http.get("http://web-api/shared-test", ({ request, params, cookies }) => {
    return HttpResponse.json({
      user: {
        id: "abc-123",
        name: "Ayaan",
      },
    });
  }),
];
