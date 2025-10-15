"use client";

import { Calendar, Mail, Phone, MapPin } from "lucide-react";

export default function ContactDetails({ dict }: { dict: any }) {
  return (
    <div className="sm:col-span-2 md:col-span-12 rounded-2xl bg-foreground p-6 md:p-8 lg:p-10 shadow-lg">
      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        <h3 className="text-white text-base md:text-xl font-bold border-r border-grey pr-3 md:pr-4">
          {dict?.sections?.details || 'Details'}
        </h3>
        <span className="flex items-center gap-2 bg-background text-white rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm">
          <Calendar size={16} />
          <span>{dict?.sections?.age || '26 years'}</span>
        </span>
        <span className="flex items-center gap-2 bg-background text-white rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm">
          <Mail size={16} />
          <span className="truncate">{dict?.sections?.email || 'email@example.com'}</span>
        </span>
        <span className="flex items-center gap-2 bg-background text-white rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm">
          <Phone size={16} />
          <span>{dict?.sections?.phone || '+00 0000000000'}</span>
        </span>
        <span className="flex items-center gap-2 bg-background text-white rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm">
          <MapPin size={16} />
          <span>🇧🇴 {dict?.sections?.country || 'India'}</span>
        </span>
      </div>
    </div>
  );
}
