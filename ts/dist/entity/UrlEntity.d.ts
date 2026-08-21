import { BranchioEntityBase } from '../BranchioEntityBase';
import type { BranchioSDK } from '../BranchioSDK';
import type { Control } from '../types';
import type { Url, UrlCreateData } from '../BranchioTypes';
declare class UrlEntity extends BranchioEntityBase<Url> {
    constructor(client: BranchioSDK, entopts: any);
    make(this: UrlEntity): UrlEntity;
    create(this: any, reqdata?: UrlCreateData, ctrl?: Control): Promise<UrlEntity>;
}
export { UrlEntity };
