module.exports = {
    apps: [
      {
        name: "albion-guildbot",
        exec_mode: "fork",
        script: "npm start",
        cwd: "./",
        env: {
            NODE_ENV: "production",
        },
      },
    ],
  };
  