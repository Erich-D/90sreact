
const mainColumnStyle: React.CSSProperties = {
    width: '70%',
    color: 'antiquewhite',
    border: '1px solid red'
}

const bannerStyle: React.CSSProperties = {
    backgroundImage: "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fsf970VLyRbZte%2Fgiphy.gif&f=1&nofb=1&ipt=e2e821773dccaa21b92c64ade63c5c6dc3d15918719710ab84457baecec6a219&ipo=images')",
    fontFamily: "'Creepster', cursive"
}

export  function MainColumn(){
    return (
      <div style={mainColumnStyle}>
        <Banner></Banner>
      </div>
    )
}

  function Banner(){
    return (
      <div style={bannerStyle}>
        <h1>90s Greatest Hits</h1>
      </div>
    )
  }