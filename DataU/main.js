if (pipRpSiteLibDataU == 'true') {
  if (versionRpSiteLinDataU == '1.0') {
    function user_agent() {
      userAgent = fetch('https://httpbin.org/user-agent', {  
        method: 'GET',  
        headers: { 
          "Content-Type": "application/json",  
        }
      })
      return userAgent.user-agent
    }
    function getIp() {
      ip = fetch('https://4.ipconfig.com/', {  
        method: 'GET',  
        headers: { 
          "Content-Type": "application/json",  
        }
      })
      return ip
    }
  }
}
