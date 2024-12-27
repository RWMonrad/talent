import Image from 'next/image'

export function TransitionBand() {
  return (
    <div className="relative w-full overflow-hidden my-24">
      <div className="relative h-[80vh] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/INTRO1.jpg-071GQpZUzHSOZtiCrzLy0MXWxnUWMq.jpeg"
          alt="Person står på klippe og ser ut over fjorden"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="absolute bottom-[20%] left-0 right-0 px-6">
          <div className="max-w-[2000px] mx-auto">
            <h2 className="text-[clamp(4rem,8vw,6rem)] leading-[0.9] font-bold tracking-tighter text-white">
              UTENFORSKAP
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

