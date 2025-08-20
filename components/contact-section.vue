<template>
  <section id="contact-section" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Let's create something amazing together
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to bring your vision to life? We'd love to hear about your
          project and discuss how we can help you achieve your goals.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Contact Form -->
        <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 class="text-2xl font-bold text-gray-900 mb-8">
            Send us a message
          </h3>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="firstName"
                  class="block text-sm font-medium text-gray-700 mb-2"
                  >First Name</label
                >
                <input
                  v-model="form.firstName"
                  type="text"
                  id="firstName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label
                  for="lastName"
                  class="block text-sm font-medium text-gray-700 mb-2"
                  >Last Name</label
                >
                <input
                  v-model="form.lastName"
                  type="text"
                  id="lastName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-2"
                >Email Address</label
              >
              <input
                v-model="form.email"
                type="email"
                id="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                for="company"
                class="block text-sm font-medium text-gray-700 mb-2"
                >Company (Optional)</label
              >
              <input
                v-model="form.company"
                type="text"
                id="company"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label
                for="projectType"
                class="block text-sm font-medium text-gray-700 mb-2"
                >Project Type</label
              >
              <select
                id="projectType"
                v-model="form.projectType"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
              >
                <option value="">Select a project type</option>
                <option value="website">Website Design & Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="ecommerce">E-commerce Solution</option>
                <option value="prototype">Rapid Prototyping</option>
                <option value="consulting">Digital Strategy Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                for="budget"
                class="block text-sm font-medium text-gray-700 mb-2"
                >Budget Range</label
              >
              <select
                v-model="form.budget"
                id="budget"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
              >
                <option value="">Select budget range</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
                <option value="discuss">Let's discuss</option>
              </select>
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 mb-2"
                >Project Details</label
              >
              <textarea
                v-model="form.message"
                id="message"
                rows="6"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none"
                placeholder="Tell us about your project, goals, and any specific requirements..."
              />
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-orange-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span
                v-if="isSubmitting"
                class="flex items-center justify-center"
              >
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
              <span v-else>Send Message</span>
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Get in Touch -->
          <div class="bg-white rounded-3xl p-8 shadow-xl">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Email</h4>
                  <p class="text-gray-600">hello@badrlabs.com</p>
                  <p class="text-sm text-gray-500">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <!-- <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Phone</h4>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                  <p class="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div> -->

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Location</h4>
                  <p class="text-gray-600">Remote-first agency</p>
                  <p class="text-sm text-gray-500">Serving clients worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Response -->
          <div
            class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8"
          >
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              Quick Response Guarantee
            </h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <div
                  class="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span class="text-gray-700">Response within 24 hours</span>
              </div>
              <div class="flex items-center space-x-3">
                <div
                  class="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span class="text-gray-700">Free initial consultation</span>
              </div>
              <div class="flex items-center space-x-3">
                <div
                  class="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span class="text-gray-700">No commitment required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AlertDialog :open="showDialog">
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Thank you for reach out!</AlertDialogTitle>
          <AlertDialogDescription>
            We've received your message and sent you a confirmation email. We'll
            be in touch soon.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            @click="showDialog = false"
            class="bg-orange-600 hover:bg-orange-700 transition-colors duration-300 text-white"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </section>
</template>

<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const isSubmitting = ref(false);
const showDialog = ref(false);

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
});

const handleSubmit = async () => {
  isSubmitting.value = true;

  // This api will send two emails. One to us from the client with details about what they want
  // Another email to the client indicating that we will respond in 24 hours
  const response = await $fetch<{ success: boolean }>("https://formcarry.com/s/owmoAOb-wqm", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      company: form.value.company,
      projectType: form.value.projectType,
      budget: form.value.budget,
      message: form.value.message,
    }),
  });

  if (response.success) {
    showDialog.value = true;
  }

  // Reset form
  form.value = {
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  };

  isSubmitting.value = false;
};
</script>
