import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-2xl font-bold">{`Scoot'Ride`}</h2>
            <p className="text-sm">{`Mobilité durable pour tous`}</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{`Liens Rapides`}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:text-primary transition-colors">{`Caractéristiques`}</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">{`À propos`}</Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-primary transition-colors">{`FAQ`}</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">{`Contact`}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{`Contact`}</h3>
            <p>{`123 Rue de la Mobilité`}</p>
            <p>{`31000 Toulouse, France`}</p>
            <p>{`contact@scootride.fr`}</p>
            <p>{`+33 5 12 34 56 78`}</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{`Suivez-nous`}</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <TwitterIcon />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          <p>{`© 2023 Scoot'Ride. Tous droits réservés.`}</p>
          <div className="mt-2">
            <Link href="#" className="hover:text-primary transition-colors">{`Mentions légales`}</Link> |
            <Link href="#" className="hover:text-primary transition-colors">{`Politique de confidentialité`}</Link> |
            <Link href="#" className="hover:text-primary transition-colors">{`CGU`}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
