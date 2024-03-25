module.exports = {
  apps : [{
    script: 'npm start',
  }], 

  deploy : {
    production : {
      key: 'key.pem',
      user : 'SSH_USERNAME',
      host : '44.211.56.122',
      ref  : 'origin/main',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
