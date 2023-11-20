import { http, HttpResponse } from "msw";
import { designSystemComponentsHandlers } from "../../../../design-system-components/src/mocks/handlers/handlers";

export const handlers = [
  ...designSystemComponentsHandlers,
  http.get("http://web-api/main-test", ({ request, params, cookies }) => {
    return HttpResponse.json({
      user: {
        id: "main-123",
        name: "Ayaan",
      },
    });
  }),
];
