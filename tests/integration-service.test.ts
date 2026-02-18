import { describe, expect, it } from "vitest";
import { syncIntegration } from "@/lib/services/integrations";

describe("integration service", () => {
  it("returns successful sync result", async () => {
    const result = await syncIntegration("metaAds");
    expect(result.success).toBe(true);
    expect(result.integration).toBe("metaAds");
  });
});
