import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="flex min-h-screen items-center py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">{`Contactez-nous`}</h2>
        <div className="mx-auto max-w-md">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                {`Nom`}
              </label>
              <Input id="name" placeholder={`Votre nom`} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                {`Email`}
              </label>
              <Input id="email" type="email" placeholder={`Votre email`} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                {`Message`}
              </label>
              <Textarea id="message" placeholder={`Votre message`} rows={4} />
            </div>
            <Button className="w-full">{`Envoyer`}</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
