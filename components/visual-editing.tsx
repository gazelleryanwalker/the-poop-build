'use client';

import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface VisualEditingProps {
  data: any;
  query: string;
  variables: any;
  children: (props: { data: any }) => React.ReactNode;
}

export function VisualEditing({ data, query, variables, children }: VisualEditingProps) {
  // Enable live editing when in edit mode
  const { data: liveData } = useTina({
    query,
    variables,
    data,
  });

  return <>{children({ data: liveData })}</>;
}

// Editable text component
export function EditableText({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return <div className={className}>{value}</div>;
}

// Editable rich text component
export function EditableRichText({
  content,
  className,
}: {
  content: any;
  className?: string;
}) {
  return (
    <div className={className}>
      <TinaMarkdown content={content} />
    </div>
  );
}

// Editable image component
export function EditableImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return <img src={src} alt={alt} className={className} />;
}
