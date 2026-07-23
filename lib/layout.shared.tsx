import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'xsql',
    },
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/IDjinn/xsql',
        external: true,
      },
    ],
  };
}
