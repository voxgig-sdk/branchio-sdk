import { BaseFeature } from './feature/base/BaseFeature';
declare class Config {
    makeFeature(this: any, fn: string): BaseFeature;
    hasFeature(this: any, fn: string): boolean;
    main: {
        name: string;
        slug: string;
        version: string;
        target: string;
    };
    feature: {
        test: {
            options: {
                active: boolean;
            };
        };
    };
    options: {
        base: string;
        headers: {
            "content-type": string;
        };
        entity: {
            url: {};
        };
    };
    entity: {
        url: {
            fields: ({
                name: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                req: boolean;
                type: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
    };
}
declare const config: Config;
export { config };
