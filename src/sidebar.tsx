import "./keyframes.css"

const sideBarStyle: React.CSSProperties = {
    width: '15%',
    color: 'antiquewhite',
    border: '1px solid red',
    overflow: 'hidden'
  }

const sideImg: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    animationName: "drop",
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
}

const reverse: React.CSSProperties = {
    animationDirection: 'reverse'
}

type SideProp = {
    side: string
    imgs: string[]
}

export  function SideBar(props: SideProp) {
    return (
      <div style={sideBarStyle}>
        <div>
            {
            (props.side === 'left') ? props.imgs.map(s => <img style={sideImg} src={s} alt=""/>):props.imgs.map(s => <img style={{...sideImg, ...reverse}} src={s} alt=""/>)
            }
        </div>
      </div>
    );
  }