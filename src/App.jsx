import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger. SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h2 className="text-3xl text-indigo-300">Hello Gsap</h2>
    </div>
  )
}

export default App