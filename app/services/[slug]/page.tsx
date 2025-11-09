import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Scale, Car, Truck, Bike, HomeIcon, Dog, FileText, Gavel } from 'lucide-react';
// Practice area data
const practiceAreas: Record<string, {
  title: string;
  description: string;
  icon: any;
  content: string;
  benefits: string[];
  process: string[];
}> = {
  'car-accidents': {
    title: 'Car Accident Attorney',
    description: 'Aggressive representation for car accident victims in Broward County, Florida.',
    icon: Car,
    content: "If you\'ve been injured in a car accident, you need experienced legal representation to protect your rights and secure the compensation you deserve. The Costello Law Group has successfully represented hundreds of car accident victims throughout Broward County, including Cooper City, Davie, Plantation, and Pembroke Pines.",
    benefits: [
      'Free case evaluation',
      'No fees unless we win',
      'Maximum compensation',
      'Experienced trial attorneys',
      'Personalized attention',
      '24/7 availability'
    ],
    process: [
      'Free consultation to evaluate your case',
      'Investigation and evidence gathering',
      'Negotiation with insurance companies',
      'Filing lawsuit if necessary',
      'Trial representation',
      'Settlement or verdict'
    ]
  }
}
