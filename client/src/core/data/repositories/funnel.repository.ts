import { GetFunnelSource } from "../sources/get-funnel.source";
import { inject, injectable } from "inversify";
import { GetNextFunnelStepSource } from "../sources/get-next-funnel-step.source";

@injectable()
export class FunnelRepository {
  constructor(
    @inject("GetFunnelSource") private readonly source: GetFunnelSource,
    @inject("GetNextFunnelStepSource")
    private readonly nextStepSource: GetNextFunnelStepSource
  ) {}

  async getFunnel(input: any) {
    return await this.source.execute(input);
  }

  async getNextFunnelStep(input: any) {
    return await this.nextStepSource.execute(input);
  }
}
