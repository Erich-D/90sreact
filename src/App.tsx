import React from 'react';
import { MainColumn } from './maincolumn';
import { SideBar } from './sidebar';

const containerStyle: React.CSSProperties = {
  backgroundImage: "url('https://media.tenor.com/baTfy6sflvAAAAAd/equalizer-music.gif')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
  display: 'flex'  
}

const lside: string[] = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6c%2F79%2Fdf%2F6c79dfd5623ffd58dba0d497b099423d.jpg&f=1&nofb=1&ipt=60121385996450c77c9fb9ef7bb3a5286675803c66815c47244d02e585c2605d&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic-1.ivoox.com%2Faudios%2F2%2F0%2F0%2F1%2F9291591271002_XXL.jpg&f=1&nofb=1&ipt=6e8e8ebe5a343961cafb08c2c715b251a6d7cb774d9b57b2823430e2201a6e0a&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.musik-sammler.de%2Fcover%2F969000%2F968735_1463858592.jpg&f=1&nofb=1&ipt=2b4bd2b74eff69dcd41cf301956c9ff620732442db32f69b3f253bbe9e5a5eea&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F474x%2Fcc%2F0c%2F1e%2Fcc0c1e15800db4fc6cf09109338b226d--stick-it-hairband.jpg&f=1&nofb=1&ipt=7ae3e6ca65e395c01849854837b3b08b2423314cd209e3fcce2f29df5c52f2dd&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FIG9rNJPpSsKUu_FwqGGTKwatto4%3D%2Ffit-in%2F600x593%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-4403135-1363967374-9414.jpeg.jpg&f=1&nofb=1&ipt=9d4146ce16f3a98beba409a90927f80e63b9932206aaaef0ed6017b437eddcca&ipo=images"
]

const rside: string[] = [
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-2T4PYbzUbyY%2FVf1hacsXZ3I%2FAAAAAAAAJ-U%2FhiSf2Rh2cgs%2Fs1600%2FFront%252B2.jpg&f=1&nofb=1&ipt=41058ebfa8f387d80a3cfad7d1ecfd6781bbd276362c93256851b316599feb22&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FMuLlPDg4K17mBAbZqcMbCkPt0lI%3D%2Ffit-in%2F600x460%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-2692053-1296771124.jpeg.jpg&f=1&nofb=1&ipt=ae12940f60e0908b9400b16e716106f48b0fd9665db3837ea71f1f57280f17f0&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-ip63TNImOSo%2FVKk2Qct6ZaI%2FAAAAAAAAEv8%2FmDKW9egSk4c%2Fs1600%2Ffront.jpg&f=1&nofb=1&ipt=8ecd5aaf03f850eda0967de5d79fe51239c54a6d08bd83356bbdd436a0bb2b78&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fen.metal-tracker.com%2Ftorrents%2Fimages%2F2454301.jpg&f=1&nofb=1&ipt=8f85f1fc9d7045395e676336e554f61957e56f7e57b629dd4b5ce3686800a83e&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FwEIh0Ob_pSVTVTTzcPlNyomVF_M%3D%2Ffit-in%2F600x600%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-10800661-1504534073-2954.jpeg.jpg&f=1&nofb=1&ipt=eaf3df00b90087538f88035024f74f945a9f557739abbb18ea8bee6836231e21&ipo=images"
]

function App() {
  return (
    <div style={containerStyle}>
      <SideBar side='left' imgs={lside}></SideBar>
      <MainColumn></MainColumn>
      <SideBar side='right' imgs={rside}></SideBar>
    </div>
  );
}

export default App;
