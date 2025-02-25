// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DomainZone extends pulumi.CustomResource {
    /**
     * Get an existing DomainZone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DomainZoneState, opts?: pulumi.CustomResourceOptions): DomainZone {
        return new DomainZone(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/domainZone:DomainZone';

    /**
     * Returns true if the given object is an instance of DomainZone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DomainZone {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DomainZone.__pulumiType;
    }

    /**
     * The domain where the DNS zone will be created.
     */
    public readonly domain!: pulumi.Output<string>;
    /**
     * Message
     */
    public /*out*/ readonly message!: pulumi.Output<string>;
    /**
     * NameServer list for zone.
     */
    public /*out*/ readonly ns!: pulumi.Output<string[]>;
    /**
     * NameServer default list for zone.
     */
    public /*out*/ readonly nsDefaults!: pulumi.Output<string[]>;
    /**
     * NameServer master list for zone.
     */
    public /*out*/ readonly nsMasters!: pulumi.Output<string[]>;
    /**
     * The project_id you want to attach the resource to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * The domain zone status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The subdomain of the DNS zone to create.
     */
    public readonly subdomain!: pulumi.Output<string>;
    /**
     * The date and time of the last update of the DNS zone.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;

    /**
     * Create a DomainZone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainZoneArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DomainZoneArgs | DomainZoneState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DomainZoneState | undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["message"] = state ? state.message : undefined;
            resourceInputs["ns"] = state ? state.ns : undefined;
            resourceInputs["nsDefaults"] = state ? state.nsDefaults : undefined;
            resourceInputs["nsMasters"] = state ? state.nsMasters : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["subdomain"] = state ? state.subdomain : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
        } else {
            const args = argsOrState as DomainZoneArgs | undefined;
            if ((!args || args.domain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domain'");
            }
            if ((!args || args.subdomain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subdomain'");
            }
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["subdomain"] = args ? args.subdomain : undefined;
            resourceInputs["message"] = undefined /*out*/;
            resourceInputs["ns"] = undefined /*out*/;
            resourceInputs["nsDefaults"] = undefined /*out*/;
            resourceInputs["nsMasters"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DomainZone.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DomainZone resources.
 */
export interface DomainZoneState {
    /**
     * The domain where the DNS zone will be created.
     */
    domain?: pulumi.Input<string>;
    /**
     * Message
     */
    message?: pulumi.Input<string>;
    /**
     * NameServer list for zone.
     */
    ns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * NameServer default list for zone.
     */
    nsDefaults?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * NameServer master list for zone.
     */
    nsMasters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The domain zone status.
     */
    status?: pulumi.Input<string>;
    /**
     * The subdomain of the DNS zone to create.
     */
    subdomain?: pulumi.Input<string>;
    /**
     * The date and time of the last update of the DNS zone.
     */
    updatedAt?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DomainZone resource.
 */
export interface DomainZoneArgs {
    /**
     * The domain where the DNS zone will be created.
     */
    domain: pulumi.Input<string>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The subdomain of the DNS zone to create.
     */
    subdomain: pulumi.Input<string>;
}
