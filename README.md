# TinaCMS Setup for The Costello Law Group

This document outlines the setup for the TinaCMS integration on the new website for The Costello Law Group and provides instructions for accessing and using the content management system.

## How to Access the CMS

To access the TinaCMS admin interface, follow these steps:

1.  **Navigate to the admin URL**: Open your web browser and go to [https://thecostellolawgroup.com/admin](https://thecostellolawgroup.com/admin).
2.  **Log in with GitHub**: You will be prompted to log in. Click the "Authenticate with GitHub" button and authorize the application.

Once you have logged in, you will be redirected to the homepage with the TinaCMS visual editor enabled.

## How to Edit Content

With the visual editor, you can edit content directly on the page. Here’s how:

1.  **Navigate to the page you want to edit**: Use the website's navigation to go to the page you want to modify.
2.  **Click on the content you want to change**: Editable regions will be highlighted. Click on any text or image to open the editor in the sidebar.
3.  **Make your changes**: Use the sidebar to edit text, upload new images, or modify content fields.
4.  **Save your changes**: Click the "Save" button in the sidebar. Your changes will be committed directly to the GitHub repository and a new deployment will be automatically triggered on Vercel.

## Content Collections

The following content types are available for editing in the CMS:

*   **Pages**: Static pages like the homepage, about us, etc.
*   **Blog Posts**: Articles for the website's blog.
*   **Testimonials**: Client testimonials and reviews.
*   **Case Results**: Details of successful case outcomes.
*   **Practice Areas**: Information about the firm's legal specializations.
*   **Site Settings**: Global site information like contact details and social media links.

## Technical Details

During the setup, we encountered a build issue with Vercel related to TinaCloud branch indexing. To resolve this, we implemented the following solution:

*   **`--skip-cloud-checks` flag**: The Vercel build command has been modified to `tinacms build --skip-cloud-checks && next build`. This flag tells the TinaCMS build process to bypass the check for TinaCloud branch indexing, which was causing the deployment to fail.

This ensures that the site can be deployed reliably without being dependent on the TinaCloud indexing status. The CMS will continue to use TinaCloud for authentication and content synchronization.
