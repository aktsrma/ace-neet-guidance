
/**
 * Utility function to generate WhatsApp redirect links
 */

// WhatsApp number with country code
const WHATSAPP_NUMBER = "919306381632"; // 91 is India's country code

/**
 * Generate a WhatsApp redirect URL with a pre-populated message
 * @param service The service name (e.g., "One-Time Call", "One-Year Mentorship")
 * @param price The price of the service
 * @param additionalInfo Any additional information to include
 * @returns WhatsApp redirect URL
 */
export const generateWhatsAppLink = (service: string, price?: number, additionalInfo?: string): string => {
  // Build the message
  let message = `Hi! I'm interested in the *${service}*`;
  
  if (price) {
    message += ` (₹${price})`;
  }
  
  message += `. Please provide more information.`;
  
  if (additionalInfo) {
    message += ` \n\nAdditional details: ${additionalInfo}`;
  }
  
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Return the WhatsApp link
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

/**
 * Redirect to WhatsApp
 */
export const redirectToWhatsApp = (service: string, price?: number, additionalInfo?: string): void => {
  const url = generateWhatsAppLink(service, price, additionalInfo);
  window.open(url, "_blank");
};
