# How to Manage Your Website Content with TinaCMS

This guide explains how to use TinaCMS to edit all aspects of your website, from pages and posts to colors, images, and SEO settings. It also covers how the TinaCMS schema works and how to trigger updates.

## What You Can Edit Right Now

Your TinaCMS is already configured with a comprehensive schema that allows you to edit the following content:

- **Pages**: All static pages on your website.
- **Blog Posts**: Articles for your blog, including featured images, authors, categories, and tags.
- **Testimonials**: Client testimonials with ratings and featured status.
- **Case Results**: Details of successful case outcomes, including settlement amounts.
- **Practice Areas**: Information about your firm's legal specializations.
- **Site Settings**: Global settings for your website, including:
    - **Company Information**: Name, tagline, and description.
    - **Contact Information**: Phone, email, and address.
    - **Social Media Links**: Facebook, Twitter, Instagram, etc.
    - **Theme Colors**: The primary and secondary colors of your website.

## How TinaCMS Schema Works (The "Crawling")

TinaCMS doesn't "crawl" your website in the traditional sense. Instead, it relies on a **schema definition** located in the `tina/config.ts` file in your project's repository. This file acts as a blueprint, telling TinaCMS exactly what content is editable, what fields it has, and what type of editor to use (e.g., text, color picker, image uploader).

Your current schema is already set up to handle all the content types listed above.

## How to Trigger Updates (Re-indexing)

To have TinaCMS "crawl" or re-index your content, you simply need to **push your changes to the `main` branch on GitHub**. Here’s how it works:

1.  **Make a change**: Edit a content file, or even the `tina/config.ts` schema itself.
2.  **Commit and push**: Commit your changes to the `main` branch of your GitHub repository.
3.  **Automatic Re-indexing**: TinaCloud automatically detects the new push and re-indexes your repository. This updates the content available in the CMS.

I have already initiated the indexing of your `main` branch in TinaCloud, so all your existing content and schemas are now available for editing.

## How to Add New Editable Content

If you ever want to make a new type of content editable, you would need to:

1.  **Add a new collection** to the `collections` array in your `tina/config.ts` file.
2.  **Define the fields** for that collection (e.g., `title`, `image`, `color`).
3.  **Push the updated `tina/config.ts` file** to your `main` branch on GitHub.

This will trigger TinaCloud to re-index your project with the new schema, and the new content type will appear in your TinaCMS admin interface.

If you have any more questions, feel free to ask!
