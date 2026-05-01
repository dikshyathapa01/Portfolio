'use client';

import { useState } from 'react';

export function useScrollReveal() {
  const [isVisible] = useState(true);

  return isVisible;
}
