// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RegistryNamespace extends pulumi.CustomResource {
    /**
     * Get an existing RegistryNamespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RegistryNamespaceState, opts?: pulumi.CustomResourceOptions): RegistryNamespace {
        return new RegistryNamespace(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/registryNamespace:RegistryNamespace';

    /**
     * Returns true if the given object is an instance of RegistryNamespace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RegistryNamespace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RegistryNamespace.__pulumiType;
    }

    /**
     * The description of the container registry namespace
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The endpoint reachable by docker
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * Define the default visibity policy
     */
    public readonly isPublic!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the container registry namespace
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    /**
     * The project_id you want to attach the resource to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * The region you want to attach the resource to
     */
    public readonly region!: pulumi.Output<string>;

    /**
     * Create a RegistryNamespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RegistryNamespaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RegistryNamespaceArgs | RegistryNamespaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RegistryNamespaceState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["endpoint"] = state ? state.endpoint : undefined;
            resourceInputs["isPublic"] = state ? state.isPublic : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
        } else {
            const args = argsOrState as RegistryNamespaceArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["isPublic"] = args ? args.isPublic : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["organizationId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RegistryNamespace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RegistryNamespace resources.
 */
export interface RegistryNamespaceState {
    /**
     * The description of the container registry namespace
     */
    description?: pulumi.Input<string>;
    /**
     * The endpoint reachable by docker
     */
    endpoint?: pulumi.Input<string>;
    /**
     * Define the default visibity policy
     */
    isPublic?: pulumi.Input<boolean>;
    /**
     * The name of the container registry namespace
     */
    name?: pulumi.Input<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    organizationId?: pulumi.Input<string>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The region you want to attach the resource to
     */
    region?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RegistryNamespace resource.
 */
export interface RegistryNamespaceArgs {
    /**
     * The description of the container registry namespace
     */
    description?: pulumi.Input<string>;
    /**
     * Define the default visibity policy
     */
    isPublic?: pulumi.Input<boolean>;
    /**
     * The name of the container registry namespace
     */
    name?: pulumi.Input<string>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The region you want to attach the resource to
     */
    region?: pulumi.Input<string>;
}
