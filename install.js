// const { exec } = require('child_process');

// module.exports = {
//   run: [
//     // Clone the repository
//     {
//       method: "shell.run",
//       params: {
//         message: [
//           "git clone https://github.com/Craftech360-projects/fastest_finger app",
//         ]
//       }
//     },
//     // Install Node.js dependencies
//     {
//       method: "shell.run",
//       params: {
//         path: "app",                // Edit this to customize the path to start the shell from
//         message: [
//           "npm install"
//         ]
//       }
//     },
//     {
//       method: "fs.link",
//       params: {
//       params: {
//         html: "Click the 'start' tab to get started!"
//       }
//     }
//   }
//   ]
// };

// const execShellCommand = (cmd, cwd = '.') => {
//   return new Promise((resolve, reject) => {
//     exec(cmd, { cwd }, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Error executing command: ${cmd}`);
//         console.error(stderr);
//         reject(error);
//       } else {
//         console.log(stdout);
//         resolve(stdout);
//       }
//     });
//   });
// };





// const { exec } = require('child_process');

// module.exports = {
//   run: [
//     // Clone the repository
//     {
//       method: "shell.run",
//       params: {
//         message: [
//           "git clone https://github.com/Craftech360-projects/fastest_finger app",
//         ]
//       }
//     },
//     // Install Node.js dependencies
//     {
//       method: "shell.run",
//       params: {
//         path: "app/frontend",                // Edit this to customize the path to start the shell from
//         message: [
//           "npm install"
//         ]
//       }
//     },
//     {
//       method: "shell.run",
//       params: {
//         path: "app/backend",                // Edit this to customize the path to start the shell from
//         message: [
//           "npm install"
//         ]
//       }
//     },
//     {
//       method: "fs.link",
//       params: {
//       params: {
//         html: "Click the 'start' tab to get started!"
//       }
//     }
//   }
//   ]
// };

// const execShellCommand = (cmd, cwd = '.') => {
//   return new Promise((resolve, reject) => {
//     exec(cmd, { cwd }, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Error executing command: ${cmd}`);
//         console.error(stderr);
//         reject(error);
//       } else {
//         console.log(stdout);
//         resolve(stdout);
//       }
//     });
//   });
// };










const { exec } = require('child_process');

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

module.exports = {
  run: [
    // Create the app directory
    {
      method: "shell.run",
      params: {
        message: [
          "mkdir app"
        ]
      }
    },
    // Clone the frontend repository
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/Craftech360-projects/digital-tree.git app/frontend"
        ]
      }
    },
    // Clone the backend repository
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/Craftech360-projects/digital-tree-backend.git app/backend"
        ]
      }
    },
    // Install Node.js dependencies in the frontend directory
    {
      method: "shell.run",
      params: {
        path: "app/frontend",
        message: [
          "npm install"
        ]
      }
    },
    // Install Node.js dependencies in the backend directory
    {
      method: "shell.run",
      params: {
        path: "app/backend",
        message: [
          "npm install"
        ]
      }
    },
    {
      method: "fs.link",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }
  ]
};

// Run the commands
const runCommands = async () => {
  try {
    // Create the app directory
    await execShellCommand('mkdir app');
    console.log('App directory created.');

    // Clone the frontend repository
    await execShellCommand('git clone https://github.com/Craftech360-projects/digital-tree.git app/frontend');
    console.log('Frontend repository cloned.');

    // Clone the backend repository
    await execShellCommand('git clone https://github.com/Craftech360-projects/digital-tree-backend.git app/backend');
    console.log('Backend repository cloned.');

    // Install Node.js dependencies in the frontend directory
    await execShellCommand('npm install', 'app/frontend');
    console.log('Dependencies installed in frontend directory.');

    // Install Node.js dependencies in the backend directory
    await execShellCommand('npm install', 'app/backend');
    console.log('Dependencies installed in backend directory.');

    console.log('Setup complete.');
  } catch (error) {
    console.error('Error during setup:', error);
  }
};

runCommands();
