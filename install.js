// module.exports = {
//   run: [
//     // Edit this step to customize the git repository to use
//     {
//       method: "shell.run",
//       params: {
//         message: [
//           "git clone https://github.com/Craftech360-projects/newAi7 app",
//         ]
//       }
//     },
//     // Delete this step if your project does not use torch
//     {
//       method: "script.start",
//       params: {
//         uri: "torch.js",
//         params: {
//           venv: "env",                // Edit this to customize the venv folder path
//           path: "app",                // Edit this to customize the path to start the shell from
//           xformers: true   // uncomment this line if your project requires xformers
//         }
//       }
//     },
//     // Edit this step with your custom install commands
//     {
//       method: "shell.run",
//       params: {
//         venv: "env",                // Edit this to customize the venv folder path
//         path: "app",                // Edit this to customize the path to start the shell from
//         message: [
//           "pip install gradio devicetorch",
//           "pip install -r requirements.txt"
//         ]
//       }
//     },
//     //  Uncomment this step to add automatic venv deduplication (Experimental)
//     {
//       method: "fs.link",
//       params: {
//         venv: "app/env"
//       }
//     },
//     {
//       method: "notify",
//       params: {
//         html: "Click the 'start' tab to get started!"
//       }

  
//     }
//   ]
// }




module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/Craftech360-projects/newAi7 app",
        ]
      }
    },
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          path: "app",                // Edit this to customize the path to start the shell from
          xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "pip install gradio devicetorch",
          "pip install -r requirements.txt"
        ]
      }
    },
    // Uninstall torch and install the specified versions
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "pip uninstall -y torch",
          "pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu124"
        ]
      }
    },
    // Uncomment this step to add automatic venv deduplication (Experimental)
    {
      method: "fs.link",
      params: {
        venv: "app/env"
      }
    },
    {
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }
  ]
}
