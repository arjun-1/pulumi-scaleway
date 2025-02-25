// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

export function getInstanceSecurityGroup(args?: GetInstanceSecurityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetInstanceSecurityGroupResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("scaleway:index/getInstanceSecurityGroup:getInstanceSecurityGroup", {
        "name": args.name,
        "securityGroupId": args.securityGroupId,
        "zone": args.zone,
    }, opts);
}

/**
 * A collection of arguments for invoking getInstanceSecurityGroup.
 */
export interface GetInstanceSecurityGroupArgs {
    name?: string;
    securityGroupId?: string;
    zone?: string;
}

/**
 * A collection of values returned by getInstanceSecurityGroup.
 */
export interface GetInstanceSecurityGroupResult {
    readonly description: string;
    readonly enableDefaultSecurity: boolean;
    readonly externalRules: boolean;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly inboundDefaultPolicy: string;
    readonly inboundRules: outputs.GetInstanceSecurityGroupInboundRule[];
    readonly name?: string;
    readonly organizationId: string;
    readonly outboundDefaultPolicy: string;
    readonly outboundRules: outputs.GetInstanceSecurityGroupOutboundRule[];
    readonly projectId: string;
    readonly securityGroupId?: string;
    readonly stateful: boolean;
    readonly tags: string[];
    readonly zone?: string;
}

export function getInstanceSecurityGroupOutput(args?: GetInstanceSecurityGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInstanceSecurityGroupResult> {
    return pulumi.output(args).apply(a => getInstanceSecurityGroup(a, opts))
}

/**
 * A collection of arguments for invoking getInstanceSecurityGroup.
 */
export interface GetInstanceSecurityGroupOutputArgs {
    name?: pulumi.Input<string>;
    securityGroupId?: pulumi.Input<string>;
    zone?: pulumi.Input<string>;
}
