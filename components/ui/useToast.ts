type ToastProps = {
  title: string;
  description?: string;
  duration?: number;
};

let toastTimeout: NodeJS.Timeout | null = null;

export const toast = (props: ToastProps) => {
  if (typeof window !== 'undefined') {
    // Clear any existing toast
    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    // Create toast element
    const toastElement = document.createElement('div');
    toastElement.className = 'fixed top-4 right-4 bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded shadow-lg z-50';
    toastElement.innerHTML = `
      <h3 class="font-bold">${props.title}</h3>
      ${props.description ? `<p>${props.description}</p>` : ''}
    `;

    // Add to DOM
    document.body.appendChild(toastElement);

    // Remove after duration
    toastTimeout = setTimeout(() => {
      document.body.removeChild(toastElement);
    }, props.duration || 3000);
  }
};

