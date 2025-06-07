// src/utils/helpers.js

// Helper function to generate unique IDs
export const generateId = () => `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// Mock fetchProfilePic function
export const fetchProfilePic = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('https://placehold.co/600x400/3498db/ffffff?text=Profile+Pic&font=montserrat');
    }, 1500); 
  });
};

// Function to handle CV Download (centralized here)
export const handleDownloadCV = () => {
    // IMPORTANT: Replace with your actual CV path relative to the public folder
    // e.g., if your CV is in public/documents/my_cv.pdf, use "/documents/my_cv.pdf"
    const cvUrl = "/your-cv.pdf"; // Make sure 'your-cv.pdf' is in the 'public' folder
    
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Jacob_Molomo_CV.pdf'); // Or any other filename you want
    document.body.appendChild(link);
    
    // Basic check for placeholder path - in a real app, ensure the file exists or handle errors gracefully.
    if (cvUrl === "/your-cv.pdf" && !link.href.includes("your-cv.pdf")) { 
        // This check might not be robust enough if the base URL itself contains "your-cv.pdf"
        // A more robust check would involve actually trying to fetch the resource HEAD.
        // For this demo, we'll keep the simple message.
        const messageBox = document.createElement('div');
        messageBox.style.position = 'fixed'; 
        messageBox.style.top = '20px'; 
        messageBox.style.left = '50%';
        messageBox.style.transform = 'translateX(-50%)'; 
        messageBox.style.padding = '15px 25px';
        messageBox.style.backgroundColor = '#ef4444'; // red-500
        messageBox.style.color = 'white';
        messageBox.style.borderRadius = '8px'; 
        messageBox.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        messageBox.style.zIndex = '10000';
        messageBox.textContent = 'CV download: Please place "your-cv.pdf" in the public folder and ensure the path in helpers.js is correct.';
        document.body.appendChild(messageBox);
        setTimeout(() => { if (document.body.contains(messageBox)) document.body.removeChild(messageBox); }, 5000);
        if (document.body.contains(link)) document.body.removeChild(link); // Clean up the link
        return; 
    }
    
    link.click();
    if (document.body.contains(link)) document.body.removeChild(link); // Clean up the link
};
