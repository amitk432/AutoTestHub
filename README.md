# AutoTestHub

AutoTestHub is a unified automation testing sandbox designed to serve as a comprehensive platform for verifying automation scripts.

## Project Structure

- **autotesthub/**: Core application folder (Next.js project).
  - **app/**: App router pages and layouts.
  - **components/**: Reusable UI components.
  - **services/**: Backend services (Supabase).
  - **tests/automation/**: Cypress automation scripts.
  - **styles/**: Global and shared styles.

## Setup Instructions

1. **Prerequisites**:
   - Node.js 18+
   - npm

2. **Installation**:
   ```bash
   cd autotesthub
   npm install
   ```

3. **Environment Variables**:
   - Copy `env.example` to `.env.local`:
     ```bash
     cp env.example .env.local
     ```
   - Fill in your Supabase URL and Anon Key.

4. **Running Locally**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

To run the automation tests:

1. Ensure the development server is running (`npm run dev`).
2. Run Cypress:
   ```bash
   npx cypress run
   ```
   Or to open the interactive runner:
   ```bash
   npx cypress open
   ```

## Deployment

The application is designed to be deployed on Vercel.

1. Push the code to GitHub.
2. Import the project in Vercel.
3. Set the Root Directory to `autotesthub`.
4. Configure Environment Variables in Vercel project settings.

## CI/CD

A GitHub Actions workflow is configured in `.github/workflows/autotesthub-ci.yml` to automatically build and test the application on every push to `main`.
