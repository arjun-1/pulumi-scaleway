// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getContainerNamespace(args?: GetContainerNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerNamespaceResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("scaleway:index/getContainerNamespace:getContainerNamespace", {
        "name": args.name,
        "namespaceId": args.namespaceId,
        "region": args.region,
    }, opts);
}

/**
 * A collection of arguments for invoking getContainerNamespace.
 */
export interface GetContainerNamespaceArgs {
    name?: string;
    namespaceId?: string;
    region?: string;
}

/**
 * A collection of values returned by getContainerNamespace.
 */
export interface GetContainerNamespaceResult {
    readonly description: string;
    readonly environmentVariables: {[key: string]: string};
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name?: string;
    readonly namespaceId?: string;
    readonly organizationId: string;
    readonly projectId: string;
    readonly region?: string;
    readonly registryEndpoint: string;
    readonly registryNamespaceId: string;
}

export function getContainerNamespaceOutput(args?: GetContainerNamespaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerNamespaceResult> {
    return pulumi.output(args).apply(a => getContainerNamespace(a, opts))
}

/**
 * A collection of arguments for invoking getContainerNamespace.
 */
export interface GetContainerNamespaceOutputArgs {
    name?: pulumi.Input<string>;
    namespaceId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
