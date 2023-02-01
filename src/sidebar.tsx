const sideBarStyle: React.CSSProperties = {
    width: '15%',
    color: 'antiquewhite',
    border: '1px solid red'
  }

export  function SideBar() {
    return (
      <div style={sideBarStyle}>
        <h1>Some Text</h1>
      </div>
    );
  }