// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Scaleway
{
    public static class GetDomainRecord
    {
        public static Task<GetDomainRecordResult> InvokeAsync(GetDomainRecordArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDomainRecordResult>("scaleway:index/getDomainRecord:getDomainRecord", args ?? new GetDomainRecordArgs(), options.WithDefaults());

        public static Output<GetDomainRecordResult> Invoke(GetDomainRecordInvokeArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.Invoke<GetDomainRecordResult>("scaleway:index/getDomainRecord:getDomainRecord", args ?? new GetDomainRecordInvokeArgs(), options.WithDefaults());
    }


    public sealed class GetDomainRecordArgs : Pulumi.InvokeArgs
    {
        [Input("data")]
        public string? Data { get; set; }

        [Input("dnsZone")]
        public string? DnsZone { get; set; }

        [Input("name")]
        public string? Name { get; set; }

        [Input("recordId")]
        public string? RecordId { get; set; }

        [Input("type")]
        public string? Type { get; set; }

        public GetDomainRecordArgs()
        {
        }
    }

    public sealed class GetDomainRecordInvokeArgs : Pulumi.InvokeArgs
    {
        [Input("data")]
        public Input<string>? Data { get; set; }

        [Input("dnsZone")]
        public Input<string>? DnsZone { get; set; }

        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("recordId")]
        public Input<string>? RecordId { get; set; }

        [Input("type")]
        public Input<string>? Type { get; set; }

        public GetDomainRecordInvokeArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDomainRecordResult
    {
        public readonly string? Data;
        public readonly string? DnsZone;
        public readonly ImmutableArray<Outputs.GetDomainRecordGeoIpResult> GeoIps;
        public readonly ImmutableArray<Outputs.GetDomainRecordHttpServiceResult> HttpServices;
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly bool KeepEmptyZone;
        public readonly string? Name;
        public readonly int Priority;
        public readonly string ProjectId;
        public readonly string? RecordId;
        public readonly bool RootZone;
        public readonly int Ttl;
        public readonly string? Type;
        public readonly ImmutableArray<Outputs.GetDomainRecordViewResult> Views;
        public readonly ImmutableArray<Outputs.GetDomainRecordWeightedResult> Weighteds;

        [OutputConstructor]
        private GetDomainRecordResult(
            string? data,

            string? dnsZone,

            ImmutableArray<Outputs.GetDomainRecordGeoIpResult> geoIps,

            ImmutableArray<Outputs.GetDomainRecordHttpServiceResult> httpServices,

            string id,

            bool keepEmptyZone,

            string? name,

            int priority,

            string projectId,

            string? recordId,

            bool rootZone,

            int ttl,

            string? type,

            ImmutableArray<Outputs.GetDomainRecordViewResult> views,

            ImmutableArray<Outputs.GetDomainRecordWeightedResult> weighteds)
        {
            Data = data;
            DnsZone = dnsZone;
            GeoIps = geoIps;
            HttpServices = httpServices;
            Id = id;
            KeepEmptyZone = keepEmptyZone;
            Name = name;
            Priority = priority;
            ProjectId = projectId;
            RecordId = recordId;
            RootZone = rootZone;
            Ttl = ttl;
            Type = type;
            Views = views;
            Weighteds = weighteds;
        }
    }
}
