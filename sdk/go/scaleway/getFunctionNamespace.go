// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package scaleway

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func LookupFunctionNamespace(ctx *pulumi.Context, args *LookupFunctionNamespaceArgs, opts ...pulumi.InvokeOption) (*LookupFunctionNamespaceResult, error) {
	opts = pkgInvokeDefaultOpts(opts)
	var rv LookupFunctionNamespaceResult
	err := ctx.Invoke("scaleway:index/getFunctionNamespace:getFunctionNamespace", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getFunctionNamespace.
type LookupFunctionNamespaceArgs struct {
	Name        *string `pulumi:"name"`
	NamespaceId *string `pulumi:"namespaceId"`
	Region      *string `pulumi:"region"`
}

// A collection of values returned by getFunctionNamespace.
type LookupFunctionNamespaceResult struct {
	Description          string            `pulumi:"description"`
	EnvironmentVariables map[string]string `pulumi:"environmentVariables"`
	// The provider-assigned unique ID for this managed resource.
	Id                  string  `pulumi:"id"`
	Name                *string `pulumi:"name"`
	NamespaceId         *string `pulumi:"namespaceId"`
	OrganizationId      string  `pulumi:"organizationId"`
	ProjectId           string  `pulumi:"projectId"`
	Region              *string `pulumi:"region"`
	RegistryEndpoint    string  `pulumi:"registryEndpoint"`
	RegistryNamespaceId string  `pulumi:"registryNamespaceId"`
}

func LookupFunctionNamespaceOutput(ctx *pulumi.Context, args LookupFunctionNamespaceOutputArgs, opts ...pulumi.InvokeOption) LookupFunctionNamespaceResultOutput {
	return pulumi.ToOutputWithContext(context.Background(), args).
		ApplyT(func(v interface{}) (LookupFunctionNamespaceResult, error) {
			args := v.(LookupFunctionNamespaceArgs)
			r, err := LookupFunctionNamespace(ctx, &args, opts...)
			var s LookupFunctionNamespaceResult
			if r != nil {
				s = *r
			}
			return s, err
		}).(LookupFunctionNamespaceResultOutput)
}

// A collection of arguments for invoking getFunctionNamespace.
type LookupFunctionNamespaceOutputArgs struct {
	Name        pulumi.StringPtrInput `pulumi:"name"`
	NamespaceId pulumi.StringPtrInput `pulumi:"namespaceId"`
	Region      pulumi.StringPtrInput `pulumi:"region"`
}

func (LookupFunctionNamespaceOutputArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupFunctionNamespaceArgs)(nil)).Elem()
}

// A collection of values returned by getFunctionNamespace.
type LookupFunctionNamespaceResultOutput struct{ *pulumi.OutputState }

func (LookupFunctionNamespaceResultOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupFunctionNamespaceResult)(nil)).Elem()
}

func (o LookupFunctionNamespaceResultOutput) ToLookupFunctionNamespaceResultOutput() LookupFunctionNamespaceResultOutput {
	return o
}

func (o LookupFunctionNamespaceResultOutput) ToLookupFunctionNamespaceResultOutputWithContext(ctx context.Context) LookupFunctionNamespaceResultOutput {
	return o
}

func (o LookupFunctionNamespaceResultOutput) Description() pulumi.StringOutput {
	return o.ApplyT(func(v LookupFunctionNamespaceResult) string { return v.Description }).(pulumi.StringOutput)
}

func (o LookupFunctionNamespaceResultOutput) EnvironmentVariables() pulumi.StringMapOutput {
	return o.ApplyT(func(v LookupFunctionNamespaceResult) map[string]string { return v.EnvironmentVariables }).(pulumi.StringMapOutput)
}

// The provider-assigned unique ID for this managed resource.
func (o LookupFunctionNamespaceResultOutput) Id() pulumi.StringOutput {
	return o.ApplyT(func(v LookupFunctionNamespaceResult) string { return v.Id }).(pulumi.StringOutput)
}

func (o LookupFunctionNamespaceResultOutput) Name() pulumi.StringPtrOutput {
	return o.ApplyT(func(v LookupFunctionNamespaceResult) *string { return v.Name }).(pulumi.StringPtrOutput)
}

func (o LookupFunctionNamespaceResultOutput) NamespaceId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v LookupFunctionNamespaceResult) *string { return v.NamespaceId }).(pulumi.StringPtrOutput)
}

func (o LookupFunctionNamespaceResultOutput) OrganizationId() pulumi.StringOutput {
	return o.ApplyT(func(v LookupFunctionNamespaceResult) string { return v.OrganizationId }).(pulumi.StringOutput)
}

func (o LookupFunctionNamespaceResultOutput) ProjectId() pulumi.StringOutput {
	return o.ApplyT(func(v LookupFunctionNamespaceResult) string { return v.ProjectId }).(pulumi.StringOutput)
}

func (o LookupFunctionNamespaceResultOutput) Region() pulumi.StringPtrOutput {
	return o.ApplyT(func(v LookupFunctionNamespaceResult) *string { return v.Region }).(pulumi.StringPtrOutput)
}

func (o LookupFunctionNamespaceResultOutput) RegistryEndpoint() pulumi.StringOutput {
	return o.ApplyT(func(v LookupFunctionNamespaceResult) string { return v.RegistryEndpoint }).(pulumi.StringOutput)
}

func (o LookupFunctionNamespaceResultOutput) RegistryNamespaceId() pulumi.StringOutput {
	return o.ApplyT(func(v LookupFunctionNamespaceResult) string { return v.RegistryNamespaceId }).(pulumi.StringOutput)
}

func init() {
	pulumi.RegisterOutputType(LookupFunctionNamespaceResultOutput{})
}
