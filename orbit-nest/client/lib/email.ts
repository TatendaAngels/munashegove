// Simple email handling using Formspree (free service, no setup needed)
// All emails will be received at: gumbochumatatenda1@gmail.com

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface CommissionFormData {
  fullName: string;
  email: string;
  serviceType: string;
  projectDescription: string;
  shippingDestination: string;
  timelinePreference: string;
}

export interface LessonFormData {
  studentName: string;
  contactMethod: string;
  skillLevel: string;
  learningGoals: string;
  preferredFormat: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzpqkab";

export const sendContactForm = async (data: ContactFormData) => {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.fullName,
        email: data.email,
        subject: data.subject,
        message: data.message,
        type: "contact",
      }),
    });

    if (response.ok) {
      return { success: true, messageId: "sent" };
    } else {
      return { success: false, error: "Failed to send" };
    }
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};

export const sendCommissionForm = async (data: CommissionFormData) => {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.fullName,
        email: data.email,
        subject: `Commission Request - ${data.serviceType}`,
        message: `Service Type: ${data.serviceType}\n\nProject Description:\n${data.projectDescription}\n\nShipping Destination: ${data.shippingDestination}\n\nTimeline: ${data.timelinePreference}`,
        type: "commission",
      }),
    });

    if (response.ok) {
      return { success: true, messageId: "sent" };
    } else {
      return { success: false, error: "Failed to send" };
    }
  } catch (error) {
    console.error("Failed to send commission request:", error);
    return { success: false, error };
  }
};

export const sendLessonInquiry = async (data: LessonFormData) => {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.studentName,
        email: data.contactMethod,
        subject: `Art Lesson Inquiry - ${data.skillLevel}`,
        message: `Skill Level: ${data.skillLevel}\n\nPreferred Format: ${data.preferredFormat}\n\nLearning Goals:\n${data.learningGoals}`,
        type: "lesson",
      }),
    });

    if (response.ok) {
      return { success: true, messageId: "sent" };
    } else {
      return { success: false, error: "Failed to send" };
    }
  } catch (error) {
    console.error("Failed to send lesson inquiry:", error);
    return { success: false, error };
  }
};
