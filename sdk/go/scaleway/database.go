// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package scaleway

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type Database struct {
	pulumi.CustomResourceState

	// Instance on which the database is created
	InstanceId pulumi.StringOutput `pulumi:"instanceId"`
	// Whether or not the database is managed
	Managed pulumi.BoolOutput `pulumi:"managed"`
	// Database name
	Name pulumi.StringOutput `pulumi:"name"`
	// User that own the database
	Owner pulumi.StringOutput `pulumi:"owner"`
	// Size of the database
	Size pulumi.StringOutput `pulumi:"size"`
}

// NewDatabase registers a new resource with the given unique name, arguments, and options.
func NewDatabase(ctx *pulumi.Context,
	name string, args *DatabaseArgs, opts ...pulumi.ResourceOption) (*Database, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.InstanceId == nil {
		return nil, errors.New("invalid value for required argument 'InstanceId'")
	}
	opts = pkgResourceDefaultOpts(opts)
	var resource Database
	err := ctx.RegisterResource("scaleway:index/database:Database", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDatabase gets an existing Database resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDatabase(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DatabaseState, opts ...pulumi.ResourceOption) (*Database, error) {
	var resource Database
	err := ctx.ReadResource("scaleway:index/database:Database", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Database resources.
type databaseState struct {
	// Instance on which the database is created
	InstanceId *string `pulumi:"instanceId"`
	// Whether or not the database is managed
	Managed *bool `pulumi:"managed"`
	// Database name
	Name *string `pulumi:"name"`
	// User that own the database
	Owner *string `pulumi:"owner"`
	// Size of the database
	Size *string `pulumi:"size"`
}

type DatabaseState struct {
	// Instance on which the database is created
	InstanceId pulumi.StringPtrInput
	// Whether or not the database is managed
	Managed pulumi.BoolPtrInput
	// Database name
	Name pulumi.StringPtrInput
	// User that own the database
	Owner pulumi.StringPtrInput
	// Size of the database
	Size pulumi.StringPtrInput
}

func (DatabaseState) ElementType() reflect.Type {
	return reflect.TypeOf((*databaseState)(nil)).Elem()
}

type databaseArgs struct {
	// Instance on which the database is created
	InstanceId string `pulumi:"instanceId"`
	// Database name
	Name *string `pulumi:"name"`
}

// The set of arguments for constructing a Database resource.
type DatabaseArgs struct {
	// Instance on which the database is created
	InstanceId pulumi.StringInput
	// Database name
	Name pulumi.StringPtrInput
}

func (DatabaseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*databaseArgs)(nil)).Elem()
}

type DatabaseInput interface {
	pulumi.Input

	ToDatabaseOutput() DatabaseOutput
	ToDatabaseOutputWithContext(ctx context.Context) DatabaseOutput
}

func (*Database) ElementType() reflect.Type {
	return reflect.TypeOf((**Database)(nil)).Elem()
}

func (i *Database) ToDatabaseOutput() DatabaseOutput {
	return i.ToDatabaseOutputWithContext(context.Background())
}

func (i *Database) ToDatabaseOutputWithContext(ctx context.Context) DatabaseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DatabaseOutput)
}

type DatabaseOutput struct{ *pulumi.OutputState }

func (DatabaseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Database)(nil)).Elem()
}

func (o DatabaseOutput) ToDatabaseOutput() DatabaseOutput {
	return o
}

func (o DatabaseOutput) ToDatabaseOutputWithContext(ctx context.Context) DatabaseOutput {
	return o
}

// Instance on which the database is created
func (o DatabaseOutput) InstanceId() pulumi.StringOutput {
	return o.ApplyT(func(v *Database) pulumi.StringOutput { return v.InstanceId }).(pulumi.StringOutput)
}

// Whether or not the database is managed
func (o DatabaseOutput) Managed() pulumi.BoolOutput {
	return o.ApplyT(func(v *Database) pulumi.BoolOutput { return v.Managed }).(pulumi.BoolOutput)
}

// Database name
func (o DatabaseOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v *Database) pulumi.StringOutput { return v.Name }).(pulumi.StringOutput)
}

// User that own the database
func (o DatabaseOutput) Owner() pulumi.StringOutput {
	return o.ApplyT(func(v *Database) pulumi.StringOutput { return v.Owner }).(pulumi.StringOutput)
}

// Size of the database
func (o DatabaseOutput) Size() pulumi.StringOutput {
	return o.ApplyT(func(v *Database) pulumi.StringOutput { return v.Size }).(pulumi.StringOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*DatabaseInput)(nil)).Elem(), &Database{})
	pulumi.RegisterOutputType(DatabaseOutput{})
}
