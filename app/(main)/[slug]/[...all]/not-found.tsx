import Image from 'next/image';
import cat from '../../../../public/404cat.png';

export default function NotFound() {
  return (
    <div className="grid h-full place-items-center">
      <div className="flex flex-col items-center justify-center h-full mt-40">
        <h1>Ojdå!</h1>
        <p className="mb-12 text-3xl text-center font-Montserrat text-DarkBrown">
          Sidan kunde inte hittas.
        </p>
        <Image
          src={cat}
          alt="404"
          width={500}
          height={500}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
}
