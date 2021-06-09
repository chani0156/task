using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using taskManagment.Models;

namespace taskManagment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        public static List<TasksModel> Tasks = new List<TasksModel>();
        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
          //  _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok();
        }


        [HttpPost] 
        public IActionResult AddTask([FromForm] TasksModel task)
        {
            Tasks.Add(task);
            return Ok(Tasks);
        }
    }
}
