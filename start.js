// module.exports = {
//   daemon: true,
//   run: [
//     {
//       method: "shell.run",
//       params: {
//         venv: "env",                // Edit this to customize the venv folder path
//         env: { },                   // Edit this to customize environment variables (see documentation)
//         path: "app",                // Edit this to customize the path to start the shell from
//         message: [
//           "npm run dev",    // Edit with your custom commands
//         ],
//         on: [{
//           // The regular expression pattern to monitor.
//           // When this pattern occurs in the shell terminal, the shell will return,
//           // and the script will go onto the next step.
//           "event": "/http:\/\/[0-9:.]+/",   

//           // "done": true will move to the next step while keeping the shell alive.
//           // "kill": true will move to the next step after killing the shell.
//           "done": true
//         }]
//       }
//     },
//     {
//       // This step sets the local variable 'url'.
//       // This local variable will be used in pinokio.js to display the "Open WebUI" tab when the value is set.
//       method: "local.set",
//       params: {
//         // the input.event is the regular expression match object from the previous step
//         url: "{{input.event[0]}}"
//       }
//     },
//     // Uncomment this step to enable local wifi sharing (access the app from devices on the same network)
//     {
//       method: "proxy.start",
//       params: {
//         uri: "{{local.url}}",
//         name: "Local Sharing"
//       }
//     }
//   ]
// }



module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        path: "app/frontend", // Path to frontend directory
        message: [
          "npm run dev", // Command to run the frontend
        ],
        on: [{
          "event": "/http:\/\/[0-9:.]+/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        frontend_url: "{{input.event[0]}}"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/backend", // Path to backend directory
        message: [
          "npm run dev", // Command to run the backend
        ],
        on: [{
          "event": "/http:\/\/[0-9:.]+/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        backend_url: "{{input.event[0]}}"
      }
    },
    // Uncomment this step to enable local wifi sharing (access the app from devices on the same network)
    {
      method: "proxy.start",
      params: {
        uri: "{{local.frontend_url}}",
        name: "Frontend Local Sharing"
      }
    },
    {
      method: "proxy.start",
      params: {
        uri: "{{local.backend_url}}",
        name: "Backend Local Sharing"
      }
    }
  ]
}
