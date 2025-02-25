// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

export function getIotDevice(args?: GetIotDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetIotDeviceResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("scaleway:index/getIotDevice:getIotDevice", {
        "deviceId": args.deviceId,
        "hubId": args.hubId,
        "name": args.name,
        "region": args.region,
    }, opts);
}

/**
 * A collection of arguments for invoking getIotDevice.
 */
export interface GetIotDeviceArgs {
    deviceId?: string;
    hubId?: string;
    name?: string;
    region?: string;
}

/**
 * A collection of values returned by getIotDevice.
 */
export interface GetIotDeviceResult {
    readonly allowInsecure: boolean;
    readonly allowMultipleConnections: boolean;
    readonly certificates: outputs.GetIotDeviceCertificate[];
    readonly createdAt: string;
    readonly description: string;
    readonly deviceId?: string;
    readonly hubId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly isConnected: boolean;
    readonly lastActivityAt: string;
    readonly messageFilters: outputs.GetIotDeviceMessageFilter[];
    readonly name?: string;
    readonly region?: string;
    readonly status: string;
    readonly updatedAt: string;
}

export function getIotDeviceOutput(args?: GetIotDeviceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotDeviceResult> {
    return pulumi.output(args).apply(a => getIotDevice(a, opts))
}

/**
 * A collection of arguments for invoking getIotDevice.
 */
export interface GetIotDeviceOutputArgs {
    deviceId?: pulumi.Input<string>;
    hubId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
