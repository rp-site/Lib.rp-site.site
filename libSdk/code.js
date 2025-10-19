let libRPSITEConsole = ''
let libRpSiteV = '1.0'
let pipRpSiteLibJson = 'false'
let versionRpSiteLinJson = '0'
let pipRpSiteLibDataU = 'false'
let versionRpSiteLinDataU = '0'
let pipRpSiteLibLocData = 'false'
let versionRpSiteLinLocData = '0'
function impLibSdkVersion(v, imcode) {
  let libRpSiteVersion = v
  if (libRpSiteVersion == '1.0') {
    if (imcode == '$ libSDK: rp-site&c: import lib version 1.0') {
      libRpSiteV = '1.0'
    } else {
      console.error(`command error pip 1.0 version. invalid command ${imcode}`)
    }
  }
}
function impLibRpSite(l, v, imcode) {
  if (libRpSiteV == '1.0') {
    if (l == 'JSON') {
      if (v == '1.0') {
        if (imcode == '$ libSDK: rp-site&Lib: json&1.0') {
          let pipRpSiteLibJson = 'true'
          let versionRpSiteLinJson = '1.0'
        } else {
          console.error(`command error pip 1.0 version. invalid command ${imcode}`)
        }
      }
    }
    if (l == 'DataU') {
      if (v == '1.0') {
        if (imcode == '$ libSDK: rp-site&Lib: DataU&1.0') {
          let pipRpSiteLibDataU = 'true'
          let versionRpSiteLinDataU = '1.0'
        } else {
          console.error(`command error pip 1.0 version. invalid command ${imcode}`)
        }
      }
    }
    if (l == 'LocData') {
      if (v == '1.0') {
        if (imcode == '$ libSDK: rp-site&Lib: LocData&1.0') {
          let pipRpSiteLibLocData = 'true'
          let versionRpSiteLinLocData = '1.0'
        } else {
          console.error(`command error pip 1.0 version. invalid command ${imcode}`)
        }
      }
    }
  }
}
