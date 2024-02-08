var comix = (() => {
  const SettingsPath = "/misc/misc-json/comix.json"

  function error(cmsg, pmsg) {
    console.error(cmsg)
    document.getElementById("comix").innerHTML = pmsg ? pmsg : `Something went wrong! Please try again...<br>If the issue persists, contact the owner.`;
  }
  
  async function fetchSettings() {
    return await fetch(SettingsPath)
      .then(response => response.json())
      .catch(e => error(`Failed to load settings at ${SettingsPath}: ${e}`))
  }
  
  function getComix(settings, id) {
    if (!(id in settings)) {
      error(`'${id}' is not a valid comic id.`, `The comix you're looking for doesn't exist x(`)
      return
    }
  
    if (!("image" in settings[id])) {
      error(`No image is given for '${id}'.`)
      return
    }
  
    if (!("title" in settings[id])) {
      error(`No title is given for '${id}'.`)
      return
    }
  
    if (!("description" in settings[id])) {
      settings[id].description = ""
    }
  
    return settings[id]
  }
  
  async function loadPage() {
    let settings = await fetchSettings()
    if (typeof settings === "undefined") {
      return
    }
  
    let keys = Object.keys(settings)
  
    let dropdown = document.getElementById("comix-dropdown")
    for (let i = 0; i < keys.length; i++) {
      let link = document.createElement("a")
      link.href = `comix?comix=${keys[i]}`
      link.textContent = `${i+1}. ${settings[keys[i]].title}`
      dropdown.append(link)
    }
  
    const params = new URLSearchParams(document.location.search);
    let id = params.get("comix")
    let comix = getComix(settings, id)
    if (typeof comix === "undefined") {
      return
    }
    
    document.getElementById("comix-title").textContent = comix.title;
    document.getElementById("comix-image").src = comix.image
    document.getElementById("comix-image-link").href = comix.image
    document.getElementById("comix-description").textContent = comix.description
    
    let arrowLeft = document.getElementById("comix-arrow-left")
    let arrowRight = document.getElementById("comix-arrow-right")
    
    let current = keys.indexOf(id)
  
    arrowLeft.href = current > 0 ? `comix?comix=${keys[current-1]}` : `comix?comix=${keys[keys.length-1]}`
    arrowRight.href = current+1 < keys.length ? `comix?comix=${keys[current+1]}` : `comix?comix=${keys[0]}`
  }

  return {
    loadPage,
    fetchSettings,
  }
})()