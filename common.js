function loadComponent(id, path) {
  $(document).ready(() => {
    $(id).load(path)
  })
}
loadComponent("#header", "header.html")
loadComponent("#footer", "footer.html")
