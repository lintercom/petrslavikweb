// Hostinger FTP deployment calls PHP directly; local development uses Vite's Node API.
export const consultantEndpoint = (action: 'config' | 'chat' | 'lead') =>
  import.meta.env.DEV ? `/api/consultant/${action}` : `/consultant.php?action=${action}`;
