module.exports = {
    apps: [
      {
        name: "albion-guildbot",
        exec_mode: "fork",
        script: "npm start",
        autorestart: false,
        cwd: "./",
        env: {
            NODE_ENV: "production",
        },
      },
    ],
  };
  