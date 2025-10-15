import Image from 'next/image';

export default function ProfileCard({ dict }: { dict: any }) {
  return (
    <div className="sm:col-span-2 md:col-span-4 lg:col-span-3 md:row-span-2 card">
      <div className="aspect-square relative overflow-hidden rounded-xl">
        <Image src="/avatar.jpg" alt="avatar" fill className="object-cover" priority />
      </div>
    </div>
  );
}
