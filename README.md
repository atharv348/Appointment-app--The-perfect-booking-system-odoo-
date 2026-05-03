# Appointmate - Booking & Appointment System

A full-featured appointment scheduling and booking management application built with TanStack Start, React, and Supabase.

## 🚀 Quick Start (Mock Mode)

This project is configured to run **without a database** by default for demonstration purposes. It uses an in-memory mock client to simulate database operations.

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Run in development mode**:
    ```bash
    npm run dev
    ```
3.  **Access the app**:
    Open `http://localhost:8080` (or the port shown in your terminal).
    - **Note**: The login screen is bypassed automatically. You will be logged in as a **Demo Admin**.

## 🛠 Features

-   **Admin Dashboard**: Overview of appointments, services, and system stats.
-   **Service Management**: Create, edit, and delete appointment types with custom durations and pricing.
-   **Booking Rules**: Configure schedule types (Weekly/Flexible), locations, and confirmation requirements.
-   **Mock Mode**: Fully functional in-memory database fallback when Supabase is not connected.
-   **Auth Gate Bypass**: Automatic redirection to the dashboard for seamless testing.

## 🔗 Repository

GitHub: [https://github.com/atharv348/Appointment-app--The-perfect-booking-system-odoo-](https://github.com/atharv348/Appointment-app--The-perfect-booking-system-odoo-)

## 💻 Tech Stack

-   **Framework**: [TanStack Start](https://tanstack.com/start)
-   **UI Components**: Radix UI + Tailwind CSS (Shadcn UI)
-   **State Management**: Zustand
-   **Data Fetching**: TanStack Query
-   **Backend (Optional)**: Supabase

## 📝 Configuration

To use a real database, add your Supabase credentials to a `.env` file:

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

If these keys are missing or invalid (less than 100 characters), the app will automatically revert to **Mock Mode**.
