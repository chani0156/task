using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace taskManagment.Models
{
    public class TasksModel
    {
        public string taskName { get; set; }
        public string taskImage { get; set; }
    }
}
