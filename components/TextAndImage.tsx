import Image, { StaticImageData } from 'next/image';

type Props = {
  text?: string;
  image: string | StaticImageData;
};

const TextAndImage = ({ text, image }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row mx-auto font-Montserrat text-DarkBrown items-center max-w-4xl bg-Beige/50 p-8 rounded-xl">
      <p className="max-w-prose text-lg p-4">
        Ibland är det väldigt svårt att vara uppfödare, och man får vara med om
        saker och göra val som är tuffa. Vi har två katter som fäst sig extra
        djupt i våra hjärtan, och som inte finns kvar hos oss längre. Det är
        S*FunHouse's MiQeela By Hector och hennes dotterdotter Adele. Jag
        klistrar här in en länk till Scandinavian Ragdoll Club.s hemsida där det
        står mycket att läsa om s.k Dvärgväxt som har drabbat vår ras. Adele var
        en sådan här liten ljuvlig kattunge, som vi fick ha kvar tills hon var
        20 veckor. MiQeela vet vi inte riktigt vad som hände med. Hon blev sjuk
        väldigt fort och rasade i vikt. Hon fick även diabetes. Tanken att
        medicinera henne varje dag och tvinga i mat kändes inte som ett
        alternativ, så hon fick somna in, och ligger bredvid Adele på en plats
        där vi minns dem.
      </p>
      <Image
        src={image}
        alt="Kattunge med dvärgväxt"
        className="w-auto mx-auto h-auto rounded-xl"
      />
    </div>
  );
};

export default TextAndImage;
