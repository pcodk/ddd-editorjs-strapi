import { useEffect, useState } from 'react';

const loadCSS = (href: string) => {
  return new Promise<void>((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
    document.head.appendChild(link);
  });
};

export function useLoadCss() {
  const [loadedCss, setLoadedCss] = useState(false);

  useEffect(() => {
    loadCSS('/editorjsStyles.css') // relative path on the platform
      .then(() => {
        setLoadedCss(true);
      })
      .catch((error) => {
        console.error(error);
        setLoadedCss(true);
      });
  }, []);

  return { loadedCss };
}
