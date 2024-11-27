import downloadImage from "@/assets/download.jpg";
import { SiAndroid, SiApple } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AppDownload() {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-10 md:mb-0 md:w-1/2">
            <h1 className="mb-4 text-4xl font-bold">{`Téléchargez Scoot'Ride`}</h1>
            <p className="mb-6 text-xl">{`Profitez de la liberté de mouvement avec notre application mobile intuitive.`}</p>
            <div className="flex space-x-4">
              <Button variant="secondary" size="lg" className="flex items-center">
                <SiApple />
                App Store
              </Button>
              <Button variant="secondary" size="lg" className="flex items-center">
                <SiAndroid />
                Google Play
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image src={downloadImage} alt="Scoot'Ride App Mockup" width={400} height={800} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
