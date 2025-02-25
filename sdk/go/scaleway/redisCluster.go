// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package scaleway

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type RedisCluster struct {
	pulumi.CustomResourceState

	// List of acl rules.
	Acls RedisClusterAclArrayOutput `pulumi:"acls"`
	// Number of nodes for the cluster.
	ClusterSize pulumi.IntOutput `pulumi:"clusterSize"`
	// The date and time of the creation of the Redis cluster
	CreatedAt pulumi.StringOutput `pulumi:"createdAt"`
	// Name of the redis cluster
	Name pulumi.StringOutput `pulumi:"name"`
	// Type of node to use for the cluster
	NodeType pulumi.StringOutput `pulumi:"nodeType"`
	// Password of the user
	Password pulumi.StringOutput `pulumi:"password"`
	// The project_id you want to attach the resource to
	ProjectId pulumi.StringOutput `pulumi:"projectId"`
	// Map of settings to define for the cluster.
	Settings pulumi.StringMapOutput `pulumi:"settings"`
	// List of tags ["tag1", "tag2", ...] attached to a redis cluster
	Tags pulumi.StringArrayOutput `pulumi:"tags"`
	// Whether or not TLS is enabled.
	TlsEnabled pulumi.BoolPtrOutput `pulumi:"tlsEnabled"`
	// The date and time of the last update of the Redis cluster
	UpdatedAt pulumi.StringOutput `pulumi:"updatedAt"`
	// Name of the user created when the cluster is created
	UserName pulumi.StringOutput `pulumi:"userName"`
	// Redis version of the cluster
	Version pulumi.StringOutput `pulumi:"version"`
	// The zone you want to attach the resource to
	Zone pulumi.StringOutput `pulumi:"zone"`
}

// NewRedisCluster registers a new resource with the given unique name, arguments, and options.
func NewRedisCluster(ctx *pulumi.Context,
	name string, args *RedisClusterArgs, opts ...pulumi.ResourceOption) (*RedisCluster, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.NodeType == nil {
		return nil, errors.New("invalid value for required argument 'NodeType'")
	}
	if args.Password == nil {
		return nil, errors.New("invalid value for required argument 'Password'")
	}
	if args.UserName == nil {
		return nil, errors.New("invalid value for required argument 'UserName'")
	}
	if args.Version == nil {
		return nil, errors.New("invalid value for required argument 'Version'")
	}
	opts = pkgResourceDefaultOpts(opts)
	var resource RedisCluster
	err := ctx.RegisterResource("scaleway:index/redisCluster:RedisCluster", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetRedisCluster gets an existing RedisCluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRedisCluster(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *RedisClusterState, opts ...pulumi.ResourceOption) (*RedisCluster, error) {
	var resource RedisCluster
	err := ctx.ReadResource("scaleway:index/redisCluster:RedisCluster", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering RedisCluster resources.
type redisClusterState struct {
	// List of acl rules.
	Acls []RedisClusterAcl `pulumi:"acls"`
	// Number of nodes for the cluster.
	ClusterSize *int `pulumi:"clusterSize"`
	// The date and time of the creation of the Redis cluster
	CreatedAt *string `pulumi:"createdAt"`
	// Name of the redis cluster
	Name *string `pulumi:"name"`
	// Type of node to use for the cluster
	NodeType *string `pulumi:"nodeType"`
	// Password of the user
	Password *string `pulumi:"password"`
	// The project_id you want to attach the resource to
	ProjectId *string `pulumi:"projectId"`
	// Map of settings to define for the cluster.
	Settings map[string]string `pulumi:"settings"`
	// List of tags ["tag1", "tag2", ...] attached to a redis cluster
	Tags []string `pulumi:"tags"`
	// Whether or not TLS is enabled.
	TlsEnabled *bool `pulumi:"tlsEnabled"`
	// The date and time of the last update of the Redis cluster
	UpdatedAt *string `pulumi:"updatedAt"`
	// Name of the user created when the cluster is created
	UserName *string `pulumi:"userName"`
	// Redis version of the cluster
	Version *string `pulumi:"version"`
	// The zone you want to attach the resource to
	Zone *string `pulumi:"zone"`
}

type RedisClusterState struct {
	// List of acl rules.
	Acls RedisClusterAclArrayInput
	// Number of nodes for the cluster.
	ClusterSize pulumi.IntPtrInput
	// The date and time of the creation of the Redis cluster
	CreatedAt pulumi.StringPtrInput
	// Name of the redis cluster
	Name pulumi.StringPtrInput
	// Type of node to use for the cluster
	NodeType pulumi.StringPtrInput
	// Password of the user
	Password pulumi.StringPtrInput
	// The project_id you want to attach the resource to
	ProjectId pulumi.StringPtrInput
	// Map of settings to define for the cluster.
	Settings pulumi.StringMapInput
	// List of tags ["tag1", "tag2", ...] attached to a redis cluster
	Tags pulumi.StringArrayInput
	// Whether or not TLS is enabled.
	TlsEnabled pulumi.BoolPtrInput
	// The date and time of the last update of the Redis cluster
	UpdatedAt pulumi.StringPtrInput
	// Name of the user created when the cluster is created
	UserName pulumi.StringPtrInput
	// Redis version of the cluster
	Version pulumi.StringPtrInput
	// The zone you want to attach the resource to
	Zone pulumi.StringPtrInput
}

func (RedisClusterState) ElementType() reflect.Type {
	return reflect.TypeOf((*redisClusterState)(nil)).Elem()
}

type redisClusterArgs struct {
	// List of acl rules.
	Acls []RedisClusterAcl `pulumi:"acls"`
	// Number of nodes for the cluster.
	ClusterSize *int `pulumi:"clusterSize"`
	// Name of the redis cluster
	Name *string `pulumi:"name"`
	// Type of node to use for the cluster
	NodeType string `pulumi:"nodeType"`
	// Password of the user
	Password string `pulumi:"password"`
	// The project_id you want to attach the resource to
	ProjectId *string `pulumi:"projectId"`
	// Map of settings to define for the cluster.
	Settings map[string]string `pulumi:"settings"`
	// List of tags ["tag1", "tag2", ...] attached to a redis cluster
	Tags []string `pulumi:"tags"`
	// Whether or not TLS is enabled.
	TlsEnabled *bool `pulumi:"tlsEnabled"`
	// Name of the user created when the cluster is created
	UserName string `pulumi:"userName"`
	// Redis version of the cluster
	Version string `pulumi:"version"`
	// The zone you want to attach the resource to
	Zone *string `pulumi:"zone"`
}

// The set of arguments for constructing a RedisCluster resource.
type RedisClusterArgs struct {
	// List of acl rules.
	Acls RedisClusterAclArrayInput
	// Number of nodes for the cluster.
	ClusterSize pulumi.IntPtrInput
	// Name of the redis cluster
	Name pulumi.StringPtrInput
	// Type of node to use for the cluster
	NodeType pulumi.StringInput
	// Password of the user
	Password pulumi.StringInput
	// The project_id you want to attach the resource to
	ProjectId pulumi.StringPtrInput
	// Map of settings to define for the cluster.
	Settings pulumi.StringMapInput
	// List of tags ["tag1", "tag2", ...] attached to a redis cluster
	Tags pulumi.StringArrayInput
	// Whether or not TLS is enabled.
	TlsEnabled pulumi.BoolPtrInput
	// Name of the user created when the cluster is created
	UserName pulumi.StringInput
	// Redis version of the cluster
	Version pulumi.StringInput
	// The zone you want to attach the resource to
	Zone pulumi.StringPtrInput
}

func (RedisClusterArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*redisClusterArgs)(nil)).Elem()
}

type RedisClusterInput interface {
	pulumi.Input

	ToRedisClusterOutput() RedisClusterOutput
	ToRedisClusterOutputWithContext(ctx context.Context) RedisClusterOutput
}

func (*RedisCluster) ElementType() reflect.Type {
	return reflect.TypeOf((**RedisCluster)(nil)).Elem()
}

func (i *RedisCluster) ToRedisClusterOutput() RedisClusterOutput {
	return i.ToRedisClusterOutputWithContext(context.Background())
}

func (i *RedisCluster) ToRedisClusterOutputWithContext(ctx context.Context) RedisClusterOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RedisClusterOutput)
}

type RedisClusterOutput struct{ *pulumi.OutputState }

func (RedisClusterOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**RedisCluster)(nil)).Elem()
}

func (o RedisClusterOutput) ToRedisClusterOutput() RedisClusterOutput {
	return o
}

func (o RedisClusterOutput) ToRedisClusterOutputWithContext(ctx context.Context) RedisClusterOutput {
	return o
}

// List of acl rules.
func (o RedisClusterOutput) Acls() RedisClusterAclArrayOutput {
	return o.ApplyT(func(v *RedisCluster) RedisClusterAclArrayOutput { return v.Acls }).(RedisClusterAclArrayOutput)
}

// Number of nodes for the cluster.
func (o RedisClusterOutput) ClusterSize() pulumi.IntOutput {
	return o.ApplyT(func(v *RedisCluster) pulumi.IntOutput { return v.ClusterSize }).(pulumi.IntOutput)
}

// The date and time of the creation of the Redis cluster
func (o RedisClusterOutput) CreatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v *RedisCluster) pulumi.StringOutput { return v.CreatedAt }).(pulumi.StringOutput)
}

// Name of the redis cluster
func (o RedisClusterOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v *RedisCluster) pulumi.StringOutput { return v.Name }).(pulumi.StringOutput)
}

// Type of node to use for the cluster
func (o RedisClusterOutput) NodeType() pulumi.StringOutput {
	return o.ApplyT(func(v *RedisCluster) pulumi.StringOutput { return v.NodeType }).(pulumi.StringOutput)
}

// Password of the user
func (o RedisClusterOutput) Password() pulumi.StringOutput {
	return o.ApplyT(func(v *RedisCluster) pulumi.StringOutput { return v.Password }).(pulumi.StringOutput)
}

// The project_id you want to attach the resource to
func (o RedisClusterOutput) ProjectId() pulumi.StringOutput {
	return o.ApplyT(func(v *RedisCluster) pulumi.StringOutput { return v.ProjectId }).(pulumi.StringOutput)
}

// Map of settings to define for the cluster.
func (o RedisClusterOutput) Settings() pulumi.StringMapOutput {
	return o.ApplyT(func(v *RedisCluster) pulumi.StringMapOutput { return v.Settings }).(pulumi.StringMapOutput)
}

// List of tags ["tag1", "tag2", ...] attached to a redis cluster
func (o RedisClusterOutput) Tags() pulumi.StringArrayOutput {
	return o.ApplyT(func(v *RedisCluster) pulumi.StringArrayOutput { return v.Tags }).(pulumi.StringArrayOutput)
}

// Whether or not TLS is enabled.
func (o RedisClusterOutput) TlsEnabled() pulumi.BoolPtrOutput {
	return o.ApplyT(func(v *RedisCluster) pulumi.BoolPtrOutput { return v.TlsEnabled }).(pulumi.BoolPtrOutput)
}

// The date and time of the last update of the Redis cluster
func (o RedisClusterOutput) UpdatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v *RedisCluster) pulumi.StringOutput { return v.UpdatedAt }).(pulumi.StringOutput)
}

// Name of the user created when the cluster is created
func (o RedisClusterOutput) UserName() pulumi.StringOutput {
	return o.ApplyT(func(v *RedisCluster) pulumi.StringOutput { return v.UserName }).(pulumi.StringOutput)
}

// Redis version of the cluster
func (o RedisClusterOutput) Version() pulumi.StringOutput {
	return o.ApplyT(func(v *RedisCluster) pulumi.StringOutput { return v.Version }).(pulumi.StringOutput)
}

// The zone you want to attach the resource to
func (o RedisClusterOutput) Zone() pulumi.StringOutput {
	return o.ApplyT(func(v *RedisCluster) pulumi.StringOutput { return v.Zone }).(pulumi.StringOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*RedisClusterInput)(nil)).Elem(), &RedisCluster{})
	pulumi.RegisterOutputType(RedisClusterOutput{})
}
