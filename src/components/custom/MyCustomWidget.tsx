// src/components/MyCustomWidget.tsx
'use client'

import React from 'react'

export const MyCustomWidget: React.FC = () => {
  return (
    <div style={{ padding: '20px', background: '#f5f5f5', borderRadius: '4px' }}>
      <h3>Custom Dashboard Widget</h3>
      <p>This is a custom component injected into the Payload Admin Panel.</p>
    </div>
  )
}
