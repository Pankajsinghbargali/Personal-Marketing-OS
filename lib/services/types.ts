export interface PerformanceMetrics {
  spend: number;
  impressions: number;
  ctr: number;
  cpc: number;
  leads: number;
  roas: number;
}

export interface IntegrationService {
  sync(): Promise<PerformanceMetrics[]>;
}
