import { Banner } from "./banner"
import "./keyframes.css"

const mainColumnStyle: React.CSSProperties = {
    width: '70%',
    color: 'antiquewhite'
}

const spinStyle: React.CSSProperties = {
    borderRadius: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    animationName: 'rotate',
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
}

const centerImg: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animationName: 'grow',
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
}



export  function MainColumn(){
    return (
      <div style={mainColumnStyle}>
        <Banner title="90s Greatest Hits" head='yes'></Banner>
        <MainContent></MainContent>
        <Banner title="Mtv Rocks!!"></Banner>
      </div>
    )
}

function MainContent(){
    return(
        <div>
            <img style={spinStyle} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-gHKxG9dJooQ%2FW0kcF3NF1rI%2FAAAAAAAAFeM%2F39-sshtGnBUJWKGZ3MVDmYBl4Dwi0LJagCLcBGAs%2Fs640%2F00.jpg&f=1&nofb=1&ipt=a34b9a01b74771e53b5ced6d1c48ef36694b58592f7801cdc1733168a802103f&ipo=images" alt=""/>
            <img style={centerImg} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FypMURIDeo1Zzq%2Fgiphy.gif&f=1&nofb=1&ipt=afd58d378dc4cb37cb3b2ec93126d1118864bf05bc4c9898224b8a88089e944d&ipo=images" alt=""></img>
        </div>
    )
}