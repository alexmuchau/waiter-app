// pm2 start ecosystem.config.js --env development
// # or for production
// pm2 start ecosystem.config.js --env production

module.exports = {
    apps: [
      {
        name: "backend",
        script: "src/app.ts",
        cwd: "./backend",
        interpreter: "node",
        interpreter_args: "-r ts-node/register",
        watch: true,
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        },
      },
      {
        name: "frontend",
        script: "node_modules/next/dist/bin/next",
        args: "start",
        cwd: "./frontend",
        watch: false,
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };