

function Links() {
    const items = [
        "Home",
        "Services",
        "Portfolio",
        "Contact",
    ]
  return (
    <div className="links">
  {items.map((item, index) => (
    <a href={`#${item}`} key={index}>{item}</a>
  ))}
</div>

  )
}

export default Links
