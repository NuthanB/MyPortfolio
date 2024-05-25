import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row  items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">Hello I'm<br/>
            <span className="text-accent">Nuthan B</span>
            </h1>
            <p className="max-w-[500px mb-9 text-white/80">
              I excel at crafting elegant experiences and I am proficient in various programming
              languages and technologies
            </p>
            <div>
              <Button>
                <span>
                  Download CV
                </span>
                <FiDownload/>
              </Button>
            </div>
          </div>
          <div>Photo</div>
        </div>
      </div>
    </section>
  )
}

export default Home
