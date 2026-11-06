import React from 'react';
import Copyright from '@theme-original/Footer/Copyright';

export default function CopyrightWrapper() {
  const copyrightText = `© 2009–${new Date().getFullYear()} AdGuard Software Ltd.`;

  return <Copyright copyright={copyrightText} />;
}
