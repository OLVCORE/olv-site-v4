"use client";

import React from 'react';

/**
 * Componente para facilitar o tracking de eventos do Google Tag Manager
 * Seguindo a Operação Blindada - apenas adicionando funcionalidade
 */

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const trackEvent = (
  eventName: string,
  parameters: Record<string, any> = {}
) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters
    });
  }
};

// Eventos específicos do site OLV
export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    page_name: pageName,
    page_location: window.location.href,
    page_title: document.title
  });
};

export const trackContactForm = (formType: string) => {
  trackEvent('form_submit', {
    form_type: formType,
    page_location: window.location.href
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    page_location: window.location.href
  });
};

export const trackSimulatorUse = (simulatorType: string) => {
  trackEvent('simulator_use', {
    simulator_type: simulatorType,
    page_location: window.location.href
  });
};

export const trackBlogView = (postTitle: string, category: string) => {
  trackEvent('blog_view', {
    post_title: postTitle,
    category: category,
    page_location: window.location.href
  });
};

export const trackPlatformView = (platformName: string) => {
  trackEvent('platform_view', {
    platform_name: platformName,
    page_location: window.location.href
  });
};

export const trackDownload = (fileType: string, fileName: string) => {
  trackEvent('file_download', {
    file_type: fileType,
    file_name: fileName,
    page_location: window.location.href
  });
};

// Hook para tracking automático de páginas
export const usePageTracking = () => {
  if (typeof window !== 'undefined') {
    // Track page view on mount
    trackPageView(window.location.pathname);
  }
};

// Componente para tracking automático
export const PageTracker: React.FC<{ pageName: string }> = ({ pageName }) => {
  React.useEffect(() => {
    trackPageView(pageName);
  }, [pageName]);

  return null;
};

export default {
  trackEvent,
  trackPageView,
  trackContactForm,
  trackWhatsAppClick,
  trackSimulatorUse,
  trackBlogView,
  trackPlatformView,
  trackDownload,
  usePageTracking,
  PageTracker
}; 