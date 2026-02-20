import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "/src/components/About";
import Logos from "./components/Logos";
function App() {
  const description = `Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.`;
  const description2="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
  
  
  return (
    <>
      <Nav />
      <Intro
        title="INTRODUCTION"
        subtitle="TO HYDRA VR"
        description={description}
      />
      <About />
      <Logos />
      <Intro
        title="HOW WE BUILD"
        subtitle="WITH HYDRA VR?"
          description={description2}
      />
    </>
  );
}

export default App;
