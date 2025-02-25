// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

export class LoadbalancerFrontend extends pulumi.CustomResource {
    /**
     * Get an existing LoadbalancerFrontend resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadbalancerFrontendState, opts?: pulumi.CustomResourceOptions): LoadbalancerFrontend {
        return new LoadbalancerFrontend(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/loadbalancerFrontend:LoadbalancerFrontend';

    /**
     * Returns true if the given object is an instance of LoadbalancerFrontend.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadbalancerFrontend {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadbalancerFrontend.__pulumiType;
    }

    /**
     * ACL rules
     */
    public readonly acls!: pulumi.Output<outputs.LoadbalancerFrontendAcl[] | undefined>;
    /**
     * The load-balancer backend ID
     */
    public readonly backendId!: pulumi.Output<string>;
    /**
     * Certificate ID
     *
     * @deprecated Please use certificate_ids
     */
    public /*out*/ readonly certificateId!: pulumi.Output<string>;
    /**
     * Collection of Certificate IDs related to the load balancer and domain
     */
    public readonly certificateIds!: pulumi.Output<string[] | undefined>;
    /**
     * TCP port to listen on the front side
     */
    public readonly inboundPort!: pulumi.Output<number>;
    /**
     * The load-balancer ID
     */
    public readonly lbId!: pulumi.Output<string>;
    /**
     * The name of the frontend
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Set the maximum inactivity time on the client side
     */
    public readonly timeoutClient!: pulumi.Output<string | undefined>;

    /**
     * Create a LoadbalancerFrontend resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadbalancerFrontendArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoadbalancerFrontendArgs | LoadbalancerFrontendState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoadbalancerFrontendState | undefined;
            resourceInputs["acls"] = state ? state.acls : undefined;
            resourceInputs["backendId"] = state ? state.backendId : undefined;
            resourceInputs["certificateId"] = state ? state.certificateId : undefined;
            resourceInputs["certificateIds"] = state ? state.certificateIds : undefined;
            resourceInputs["inboundPort"] = state ? state.inboundPort : undefined;
            resourceInputs["lbId"] = state ? state.lbId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["timeoutClient"] = state ? state.timeoutClient : undefined;
        } else {
            const args = argsOrState as LoadbalancerFrontendArgs | undefined;
            if ((!args || args.backendId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backendId'");
            }
            if ((!args || args.inboundPort === undefined) && !opts.urn) {
                throw new Error("Missing required property 'inboundPort'");
            }
            if ((!args || args.lbId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lbId'");
            }
            resourceInputs["acls"] = args ? args.acls : undefined;
            resourceInputs["backendId"] = args ? args.backendId : undefined;
            resourceInputs["certificateIds"] = args ? args.certificateIds : undefined;
            resourceInputs["inboundPort"] = args ? args.inboundPort : undefined;
            resourceInputs["lbId"] = args ? args.lbId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeoutClient"] = args ? args.timeoutClient : undefined;
            resourceInputs["certificateId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoadbalancerFrontend.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LoadbalancerFrontend resources.
 */
export interface LoadbalancerFrontendState {
    /**
     * ACL rules
     */
    acls?: pulumi.Input<pulumi.Input<inputs.LoadbalancerFrontendAcl>[]>;
    /**
     * The load-balancer backend ID
     */
    backendId?: pulumi.Input<string>;
    /**
     * Certificate ID
     *
     * @deprecated Please use certificate_ids
     */
    certificateId?: pulumi.Input<string>;
    /**
     * Collection of Certificate IDs related to the load balancer and domain
     */
    certificateIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * TCP port to listen on the front side
     */
    inboundPort?: pulumi.Input<number>;
    /**
     * The load-balancer ID
     */
    lbId?: pulumi.Input<string>;
    /**
     * The name of the frontend
     */
    name?: pulumi.Input<string>;
    /**
     * Set the maximum inactivity time on the client side
     */
    timeoutClient?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoadbalancerFrontend resource.
 */
export interface LoadbalancerFrontendArgs {
    /**
     * ACL rules
     */
    acls?: pulumi.Input<pulumi.Input<inputs.LoadbalancerFrontendAcl>[]>;
    /**
     * The load-balancer backend ID
     */
    backendId: pulumi.Input<string>;
    /**
     * Collection of Certificate IDs related to the load balancer and domain
     */
    certificateIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * TCP port to listen on the front side
     */
    inboundPort: pulumi.Input<number>;
    /**
     * The load-balancer ID
     */
    lbId: pulumi.Input<string>;
    /**
     * The name of the frontend
     */
    name?: pulumi.Input<string>;
    /**
     * Set the maximum inactivity time on the client side
     */
    timeoutClient?: pulumi.Input<string>;
}
