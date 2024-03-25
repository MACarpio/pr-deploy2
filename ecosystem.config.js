module.exports = {
  apps : [{
    script: 'npm start',
  }], 

  deploy : {
    production : {
      key: 'key.pem',
      user : 'bitnami',
      host : '44.211.56.122',
      ref  : 'origin/main',
      repo : 'git@github.com:MACarpio/pr-deploy2.git',
      path : '/home/bitnami',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
