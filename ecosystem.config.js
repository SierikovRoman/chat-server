module.exports = {
    apps: [{
      name: 'chat-server',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-223-121-93.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/id_rsa.pub',
        ref: 'origin/master',
        repo: 'git@github.com:SierikovRoman/chat-server.git',
        path: '/home/ubuntu/chat-server',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }