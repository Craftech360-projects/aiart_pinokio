const { exec } = require('child_process');

module.exports = {
  run: [
    // Clone the repository
    {
      method: "shell.run",
      params: {
        message: [
          "git clonehttps://github.com/Craftech360-projects/fastest_finger app",
        ]
      }
    },
    // Install Node.js dependencies
    {
      method: "shell.run",
      params: {
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "npm install"
        ]
      }
    },
    // Uninstall and install the specified versions of torch if needed
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
};

const execShellCommand = (cmd, cwd = '.') => {
  return new Promise((resolve, reject) => {
    exec(cmd, { cwd }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${cmd}`);
        console.error(stderr);
        reject(error);
      } else {
        console.log(stdout);
        resolve(stdout);
      }
    });
  });
};
