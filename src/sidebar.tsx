const sideBarStyle: React.CSSProperties = {
    width: '15%',
    color: 'antiquewhite',
    border: '1px solid red'
  }

const sideImg: React.CSSProperties = {
    position: 'relative',
    width: '100%'
}

export  function SideBar() {
    return (
      <div style={sideBarStyle}>
        <img style={sideImg} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6c%2F79%2Fdf%2F6c79dfd5623ffd58dba0d497b099423d.jpg&f=1&nofb=1&ipt=60121385996450c77c9fb9ef7bb3a5286675803c66815c47244d02e585c2605d&ipo=images" alt=""/>
      </div>
    );
  }