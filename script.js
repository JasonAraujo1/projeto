function toggleMode() {
  const html = document.documentElement
  const avatar = document.querySelector("#profile img")

  // Remova ou adicione a classe "light" no elemento HTML (alternância de modo)
  html.classList.toggle("light")

  // Defina a animação de fade na imagem
  avatar.style.transition = "opacity 0.2s ease-in-out"

  // Defina a opacidade da imagem para 0 (fade-out)
  avatar.style.opacity = 0

  setTimeout(() => {
    if (html.classList.contains("light")) {
      // Se o modo for claro, atualize a imagem para o modo claro
      avatar.setAttribute("src", "./assets/AvatarLightMode.png")
      avatar.setAttribute(
        "alt",
        "foto de jason sorrindo, usando camisa preta cordão, óculos escuros, barba e fundo azul degradê"
      )
    } else {
      // Caso contrário, atualize a imagem para o modo escuro
      avatar.setAttribute("src", "./assets/AvatarNight.png")
      avatar.setAttribute(
        "alt",
        "foto de jason sorrindo, usando camisa preta cordão, barba e fundo azul degradê"
      )
    }

    // Defina a opacidade da imagem de volta para 1 (fade-in)
    avatar.style.opacity = 1
  }, 300)
}
