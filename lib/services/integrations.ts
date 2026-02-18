type IntegrationName =
  | "metaAds"
  | "googleAds"
  | "googleAnalytics"
  | "whatsAppBusiness"
  | "gmail"
  | "googleCalendar";

export type SyncResult = {
  integration: IntegrationName;
  success: boolean;
  syncedAt: string;
  rateLimitRemaining: number;
  message: string;
};

export async function syncIntegration(integration: IntegrationName): Promise<SyncResult> {
  await new Promise((resolve) => setTimeout(resolve, 120));

  return {
    integration,
    success: true,
    syncedAt: new Date().toISOString(),
    rateLimitRemaining: 98,
    message: `${integration} sync complete`
  };
}
