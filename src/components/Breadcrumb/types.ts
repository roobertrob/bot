import { ReactNode } from 'react';

interface BreadcrumbItems {
  children: ReactNode;
  link?: string;
}

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItems[];
  navigateTo?: (uri: string) => void;
}
export type { BreadcrumbProps };
