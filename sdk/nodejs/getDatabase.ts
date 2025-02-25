// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDatabase(args: GetDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseResult> {
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("scaleway:index/getDatabase:getDatabase", {
        "instanceId": args.instanceId,
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getDatabase.
 */
export interface GetDatabaseArgs {
    instanceId: string;
    name: string;
}

/**
 * A collection of values returned by getDatabase.
 */
export interface GetDatabaseResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly instanceId: string;
    readonly managed: boolean;
    readonly name: string;
    readonly owner: string;
    readonly size: string;
}

export function getDatabaseOutput(args: GetDatabaseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseResult> {
    return pulumi.output(args).apply(a => getDatabase(a, opts))
}

/**
 * A collection of arguments for invoking getDatabase.
 */
export interface GetDatabaseOutputArgs {
    instanceId: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
