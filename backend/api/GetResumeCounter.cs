using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace Company.Function
{
    public static class GetResumeCounter
    {
        [FunctionName("GetResumeCounter")]
        public static HttpResponseMessage Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [CosmoDB(databasename:"azureresumeab ", collectionName:"counter",ConnectionStringSetting = "AzureResumeConnectionString",Id ="1",PartitionKey = "1")]Counter counter,
            [CosmoDB(databasename:"azureresumeab ", collectionName:"counter",ConnectionStringSetting = "AzureResumeConnectionString",Id ="1",PartitionKey = "1")] out Counter updatedCounter,

            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            updatedCounter= counter;
            updatedCounter.Count+=1;
            var jsonToReturn = JsonConvert.SerializeObject(counter);

            return new HttpResponseMessage(){
                ContextBoundObject - new StringContent(jsonToReturn, EncodingUTF8, "application/json")
            };
            
        }
    }
}