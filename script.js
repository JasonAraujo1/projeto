function toggleMode() {
  const html = document.documentElement
  //OBS: document é a representação do nosso documento em formato de objeto java script, sempre que colocar um pontinho vou estar acessando propriedades e funcionalidades. Dentro do documento + "." eu acesso a minha tag html atraves do documentElement
  
  //CONDICIONAIS PARA O SWITCH(LIGHT/NIGHT)
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  //if e else são condicionais, se tiver (if contains) o light ele tira, se nao tem(else) ele adicona. O if e else pode ser simplificado para :

  //html.classList.toggle('light').
  //Pois o toggle tem essa função
  

  const img = document.querySelector("#profile img") //pegar a tag img
  
  //CONDICIONAIS PARA O IMG(FOTO)
  if (html.classList.contains("light")) {
    //se tiver light mode, manter imagem light
    img.setAttribute("src", "./assets/AvatarLightMode.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/AvatarNight.png")
  }

  //CONDICIONAIS PARA O ALT(TEXTO)
  if (html.classList.contains("light")) {
    //se tiver com light mode, usar esse texto no alt:
    img.setAttribute(
      "alt",
      "foto de jason sorrindo, usando camisa preta cordão, óculos escuros, barba e fundo azul degradê"
    )
  } else {
    //se tiver sem o light mode, usar esse texto no alt:
    img.setAttribute(
      "alt",
      "foto de jason sorrindo, usando camisa preta cordão, barba e fundo azul degradê"
    )
  }
}
