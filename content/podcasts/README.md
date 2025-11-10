# Podcasts Content Directory

This directory contains all podcast episode content for your website.

## How to Add Podcasts

### Through TinaCMS Admin (Recommended)

1. Visit `/admin` in your browser
2. Click "Podcasts" in the sidebar
3. Click "Create New" to add a new episode
4. Fill in the episode details:
   - **Episode Title**: The name of your podcast episode
   - **Episode Description**: A brief summary of the episode
   - **Episode Number**: Sequential episode number
   - **Published Date**: When the episode was released
   - **Audio File URL**: Link to your MP3/audio file (hosted externally)
   - **Duration**: Length of the episode in minutes
   - **Episode Cover Image**: Visual for the episode
   - **Hosts**: List of podcast hosts
   - **Guests**: List of episode guests
   - **Tags**: Topics covered in the episode
   - **Draft**: Keep checked to hide from public (uncheck to publish)
   - **Show Notes**: Rich text content with episode details
5. Click "Save"

### File Structure

Each podcast episode is stored as an MDX file in this directory:

```
content/podcasts/
├── sample-episode.mdx
├── episode-2.mdx
├── episode-3.mdx
└── ...
```

### Frontmatter Format

Each MDX file has frontmatter (metadata) at the top:

```yaml
---
title: Episode Title
description: Episode description
episodeNumber: 1
publishedAt: 2025-01-15T12:00:00.000Z
audioUrl: https://example.com/audio.mp3
duration: 30
coverImage: /path/to/image.jpg
hosts:
  - Host Name
guests:
  - Guest Name
tags:
  - Tag 1
  - Tag 2
draft: true
---
```

## Making Episodes Live

By default, new episodes have `draft: true` which keeps them hidden from the public website. To make an episode visible:

1. Edit the episode in TinaCMS admin
2. Uncheck the "Draft (Unpublished)" checkbox
3. Save the changes

## Audio Hosting

The `audioUrl` field should point to an externally hosted audio file (MP3 recommended). You can host your audio files on:

- Your own server
- Cloud storage (AWS S3, Google Cloud Storage, etc.)
- Podcast hosting platforms (Buzzsprout, Anchor, Podbean, etc.)

Just paste the direct URL to the audio file in the `audioUrl` field.

## Page URLs

- Main podcast listing: `/podcasts`
- Individual episodes: `/podcasts/[filename]`

Example: `content/podcasts/my-first-episode.mdx` → `/podcasts/my-first-episode`

## Navigation

The podcasts page is currently in "draft" mode and is NOT linked in the site navigation. When you're ready to make it public:

1. Add a link to `/podcasts` in the navigation component
2. Optionally add it to the footer
3. Promote the page on your homepage or other pages

This keeps the podcasts section hidden until you're ready to launch it!
