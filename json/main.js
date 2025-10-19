if (pipRpSiteLibJson == 'true') {
  if (versionRpSiteLinJson = '1.0') {
    function RpSiteJson(com, text) {
      if (com == 'stringify') {
        return JSON.stringify(text)
      }
      if (com == 'parse') {
        return JSON.parse(text)
      }
      if (com == 'find') {
        return JSON.find(text)
      }
      if (com == 'filter') {
        return JSON.filter(text)
      }
      if (com == 'map') {
        return JSON.map(text)
      }
      if (com == 'set') {
        p1 = text[1]
        p2 = text[2]
        p3 = text[3]
        return eval(`${p1}.${p2} = ${p3}`)
      }
      if (com == 'delete') {
        p1 = text[1]
        p2 = text[2]
        return eval(`delete ${p1}.${p2}`)
      }
      if (com == 'delete') {
        p1 = text[1]
        p2 = text[2]
        return eval(`delete ${p1}.${p2}`)
      }
      if (com == 'get') {
        p1 = text[1]
        p2 = text[2]
        return eval(`${p1}.${p2}`)
      }
      if (com == 'new') {
        return ('{}')
      }
    }
    function JsonArrayRpSite(com, text) {
      if (com == 'get') {
        p1 = text[1]
        p2 = text[2]
        return eval(`${p1}[${p2}]`)
      }
      if (com == 'delete') {
        p1 = text[1]
        p2 = text[2]
        p3 = text[3]
        return eval(`${p1}.${p2}(${p3})`)
      }
      if (com == 'add') {
        p1 = text[1]
        p2 = text[2]
        p3 = text[3]
        return eval(`${p1}.${p2}(${p3})`)
      }
      if (com == 'new') {
        return ('[]')
      }
    }
  }
}
