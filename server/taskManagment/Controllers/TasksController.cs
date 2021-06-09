using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using taskManagment.Models;

namespace taskManagment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        public static List<TasksModel> TasksList = new List<TasksModel>();
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(TasksList);
        }


        [HttpPost("addTask")]
        public IActionResult AddTask(  TasksModel task)
        {
            TasksList.Add(task);
            return Ok();
        }
    }
}
