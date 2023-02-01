

const bannerStyle: React.CSSProperties = {
    backgroundImage: "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fsf970VLyRbZte%2Fgiphy.gif&f=1&nofb=1&ipt=e2e821773dccaa21b92c64ade63c5c6dc3d15918719710ab84457baecec6a219&ipo=images')",
    fontFamily: "'Creepster', cursive",
    height: '140px',
    textShadow: '5px 5px 15px red',
    display: 'flex',
    justifyContent: 'center'
}

const center: React.CSSProperties = {
    position: "relative",
    top: '50%',
    transform: 'translateY(-50%)'
}

type BannerProps = {title: string}

export function Banner(props: BannerProps){
    return (
      <div style={bannerStyle}>
        <h1 style={center}>{props.title}</h1>
      </div>
    )
  }