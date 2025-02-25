// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

export function getRedisCluster(args?: GetRedisClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetRedisClusterResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("scaleway:index/getRedisCluster:getRedisCluster", {
        "clusterId": args.clusterId,
        "name": args.name,
        "zone": args.zone,
    }, opts);
}

/**
 * A collection of arguments for invoking getRedisCluster.
 */
export interface GetRedisClusterArgs {
    clusterId?: string;
    name?: string;
    zone?: string;
}

/**
 * A collection of values returned by getRedisCluster.
 */
export interface GetRedisClusterResult {
    readonly acls: outputs.GetRedisClusterAcl[];
    readonly clusterId?: string;
    readonly clusterSize: number;
    readonly createdAt: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name?: string;
    readonly nodeType: string;
    readonly password: string;
    readonly projectId: string;
    readonly settings: {[key: string]: string};
    readonly tags: string[];
    readonly tlsEnabled: boolean;
    readonly updatedAt: string;
    readonly userName: string;
    readonly version: string;
    readonly zone?: string;
}

export function getRedisClusterOutput(args?: GetRedisClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRedisClusterResult> {
    return pulumi.output(args).apply(a => getRedisCluster(a, opts))
}

/**
 * A collection of arguments for invoking getRedisCluster.
 */
export interface GetRedisClusterOutputArgs {
    clusterId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    zone?: pulumi.Input<string>;
}
