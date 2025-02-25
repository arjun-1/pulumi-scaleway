// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Scaleway
{
    public static class GetContainer
    {
        public static Task<GetContainerResult> InvokeAsync(GetContainerArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetContainerResult>("scaleway:index/getContainer:getContainer", args ?? new GetContainerArgs(), options.WithDefaults());

        public static Output<GetContainerResult> Invoke(GetContainerInvokeArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.Invoke<GetContainerResult>("scaleway:index/getContainer:getContainer", args ?? new GetContainerInvokeArgs(), options.WithDefaults());
    }


    public sealed class GetContainerArgs : Pulumi.InvokeArgs
    {
        [Input("containerId")]
        public string? ContainerId { get; set; }

        [Input("name")]
        public string? Name { get; set; }

        [Input("namespaceId", required: true)]
        public string NamespaceId { get; set; } = null!;

        [Input("region")]
        public string? Region { get; set; }

        public GetContainerArgs()
        {
        }
    }

    public sealed class GetContainerInvokeArgs : Pulumi.InvokeArgs
    {
        [Input("containerId")]
        public Input<string>? ContainerId { get; set; }

        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("namespaceId", required: true)]
        public Input<string> NamespaceId { get; set; } = null!;

        [Input("region")]
        public Input<string>? Region { get; set; }

        public GetContainerInvokeArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetContainerResult
    {
        public readonly string? ContainerId;
        public readonly int CpuLimit;
        public readonly string CronStatus;
        public readonly bool Deploy;
        public readonly string Description;
        public readonly string DomainName;
        public readonly ImmutableDictionary<string, string> EnvironmentVariables;
        public readonly string ErrorMessage;
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly int MaxConcurrency;
        public readonly int MaxScale;
        public readonly int MemoryLimit;
        public readonly int MinScale;
        public readonly string? Name;
        public readonly string NamespaceId;
        public readonly int Port;
        public readonly string Privacy;
        public readonly string Protocol;
        public readonly string? Region;
        public readonly string RegistryImage;
        public readonly string Status;
        public readonly int Timeout;

        [OutputConstructor]
        private GetContainerResult(
            string? containerId,

            int cpuLimit,

            string cronStatus,

            bool deploy,

            string description,

            string domainName,

            ImmutableDictionary<string, string> environmentVariables,

            string errorMessage,

            string id,

            int maxConcurrency,

            int maxScale,

            int memoryLimit,

            int minScale,

            string? name,

            string namespaceId,

            int port,

            string privacy,

            string protocol,

            string? region,

            string registryImage,

            string status,

            int timeout)
        {
            ContainerId = containerId;
            CpuLimit = cpuLimit;
            CronStatus = cronStatus;
            Deploy = deploy;
            Description = description;
            DomainName = domainName;
            EnvironmentVariables = environmentVariables;
            ErrorMessage = errorMessage;
            Id = id;
            MaxConcurrency = maxConcurrency;
            MaxScale = maxScale;
            MemoryLimit = memoryLimit;
            MinScale = minScale;
            Name = name;
            NamespaceId = namespaceId;
            Port = port;
            Privacy = privacy;
            Protocol = protocol;
            Region = region;
            RegistryImage = registryImage;
            Status = status;
            Timeout = timeout;
        }
    }
}
