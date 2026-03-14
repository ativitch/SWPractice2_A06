import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative mx-auto h-[260px] w-[95%] overflow-hidden">
      <Image
        src="/Beach-Party-Venue-Dusit-Thani-Prestigious-Venues-panorama (1).jpg"
        alt="Event venue banner"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-2xl font-bold md:text-4xl">
          where every event finds its venue
        </h1>
        <p className="mt-3 max-w-3xl text-sm md:text-base">
          Finding the perfect venue has never been easier. Whether it&apos;s a
          wedding, corporate event, or private party, we connect you to the
          perfect place.
        </p>
      </div>
    </section>
  );
}