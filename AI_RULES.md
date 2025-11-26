# AI Rules for Lovable Project

This document outlines the core technologies and specific library usage guidelines for this React application.

## Tech Stack

*   **React:** The primary JavaScript library for building user interfaces.
*   **TypeScript:** Used for type-safe JavaScript, enhancing code quality and maintainability.
*   **Vite:** A fast build tool that provides an instant development server and optimized builds.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **shadcn/ui:** A collection of reusable UI components built with Radix UI and Tailwind CSS.
*   **React Router:** For declarative client-side routing within the application.
*   **Lucide React:** A library providing a set of beautiful and customizable SVG icons.
*   **AOS (Animate On Scroll):** For adding scroll-triggered animations to elements.
*   **React Query:** For efficient data fetching, caching, and synchronization of server state.
*   **React Hook Form & Zod:** For robust form management and schema-based validation.
*   **Sonner:** For displaying elegant and customizable toast notifications.

## Library Usage Rules

To maintain consistency and efficiency, please adhere to the following guidelines when developing:

*   **UI Components:** Always prioritize `shadcn/ui` components for building the user interface. If a specific component is not available in `shadcn/ui`, create a new, small, and focused custom component using Tailwind CSS. **Do not modify existing `shadcn/ui` component files.**
*   **Styling:** All styling must be done using **Tailwind CSS** classes. Avoid inline styles unless absolutely necessary for dynamic, computed values.
*   **Routing:** Use **React Router** for all client-side navigation. All main application routes should be defined within `src/App.tsx`.
*   **Icons:** Use icons from the **`lucide-react`** library.
*   **Animations:** For scroll-triggered animations, utilize the **AOS** library.
*   **Form Handling & Validation:** Use **`react-hook-form`** for managing form state and submissions, and **`zod`** for defining and validating form schemas.
*   **Toasts/Notifications:** Use **`sonner`** for displaying all toast notifications to the user.
*   **Data Fetching:** For managing server state and fetching data, use **`react-query`**.
*   **Number Animations:** Use **`react-countup`** for animating numerical values.