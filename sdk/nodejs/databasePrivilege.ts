// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DatabasePrivilege extends pulumi.CustomResource {
    /**
     * Get an existing DatabasePrivilege resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabasePrivilegeState, opts?: pulumi.CustomResourceOptions): DatabasePrivilege {
        return new DatabasePrivilege(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/databasePrivilege:DatabasePrivilege';

    /**
     * Returns true if the given object is an instance of DatabasePrivilege.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabasePrivilege {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabasePrivilege.__pulumiType;
    }

    /**
     * Database name
     */
    public readonly databaseName!: pulumi.Output<string>;
    /**
     * Instance on which the database is created
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * Privilege
     */
    public readonly permission!: pulumi.Output<string>;
    /**
     * User name
     */
    public readonly userName!: pulumi.Output<string>;

    /**
     * Create a DatabasePrivilege resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabasePrivilegeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabasePrivilegeArgs | DatabasePrivilegeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabasePrivilegeState | undefined;
            resourceInputs["databaseName"] = state ? state.databaseName : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["permission"] = state ? state.permission : undefined;
            resourceInputs["userName"] = state ? state.userName : undefined;
        } else {
            const args = argsOrState as DatabasePrivilegeArgs | undefined;
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.permission === undefined) && !opts.urn) {
                throw new Error("Missing required property 'permission'");
            }
            if ((!args || args.userName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userName'");
            }
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["permission"] = args ? args.permission : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatabasePrivilege.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DatabasePrivilege resources.
 */
export interface DatabasePrivilegeState {
    /**
     * Database name
     */
    databaseName?: pulumi.Input<string>;
    /**
     * Instance on which the database is created
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Privilege
     */
    permission?: pulumi.Input<string>;
    /**
     * User name
     */
    userName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DatabasePrivilege resource.
 */
export interface DatabasePrivilegeArgs {
    /**
     * Database name
     */
    databaseName: pulumi.Input<string>;
    /**
     * Instance on which the database is created
     */
    instanceId: pulumi.Input<string>;
    /**
     * Privilege
     */
    permission: pulumi.Input<string>;
    /**
     * User name
     */
    userName: pulumi.Input<string>;
}
