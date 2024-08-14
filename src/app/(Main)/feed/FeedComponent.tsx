'use client';


import FeedContent from './FeedContent';
import FilterSheet from './FilterSheet';
import { PageAnimation } from '@/shared';

export default function FeedComponent() {
  return (
    <PageAnimation>
      <FeedContent />
      <FilterSheet />
    </PageAnimation>
  );
}
