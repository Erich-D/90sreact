import "./keyframes.css"

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

type mainContentProps = {
    spinImg: string,
    growImg: string
}

export function MainContent(props: mainContentProps){
    return(
        <div>
            <img style={spinStyle} src={props.spinImg} alt=""/>
            <img style={centerImg} src={props.growImg} alt=""></img>
        </div>
    )
}