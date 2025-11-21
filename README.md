# Muhammad Afaq - AI Expert Portfolio

A modern, professional portfolio website with an integrated CMS for Muhammad Afaq, an AI Expert specializing in Machine Learning, Deep Learning, and Natural Language Processing.

## Features

### Portfolio Website
- **Hero Section**: Eye-catching introduction with gradient text and call-to-action buttons
- **About Section**: Professional biography highlighting expertise and services
- **Skills Section**: Showcase of AI/ML expertise with beautiful icons
- **Projects Section**: Display featured projects with images, descriptions, and links
- **Blog Section**: Latest blog posts about AI and technology
- **Contact Section**: Easy way for clients to get in touch
- **Responsive Design**: Fully responsive and mobile-friendly
- **Dark Mode**: Automatic dark mode support

### CMS Admin Panel
- **Projects Management**: Add, edit, and delete projects
- **Blog Management**: Create and manage blog posts
- **Featured Content**: Mark projects as featured
- **Real-time Updates**: Changes reflect immediately on the website
- **Easy-to-use Interface**: Clean and intuitive admin panel

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data Storage**: JSON-based file system

## Getting Started

The development server is managed by the platform. Your portfolio is automatically running!

### Access the Website

- **Portfolio**: Navigate to your preview URL (usually port 3001)
- **Admin Panel**: Visit `/admin` to manage your content

### Managing Content

1. Go to `/admin` in your browser
2. Use the tabs to switch between Projects and Blog Posts
3. Add new content using the "Add" button
4. Edit existing items with the pencil icon
5. Delete items with the trash icon

## Project Structure

```
├── app/
│   ├── admin/           # CMS Admin Panel
│   ├── api/            # API Routes
│   │   ├── projects/   # Projects CRUD API
│   │   └── blog/       # Blog CRUD API
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   ├── Navigation.tsx  # Navigation bar
│   └── Footer.tsx      # Footer
├── lib/               # Utilities
│   ├── types.ts       # TypeScript interfaces
│   └── data.ts        # Data management functions
├── data/              # Data storage
│   └── portfolio.json # Portfolio data
└── tailwind.config.ts # Tailwind configuration
```

## Customization

### Update Personal Information

Edit the following files to customize your information:

- **Homepage**: `app/page.tsx` - Update name, bio, skills
- **Footer**: `components/Footer.tsx` - Update social links and contact info
- **Metadata**: `app/layout.tsx` - Update SEO information

### Add New Projects

1. Visit `/admin`
2. Go to the Projects tab
3. Click "Add Project"
4. Fill in the details and save

### Add Blog Posts

1. Visit `/admin`
2. Go to the Blog Posts tab
3. Click "Add Blog Post"
4. Write your content and publish

## Data Storage

Portfolio data is stored in `data/portfolio.json`. The CMS automatically updates this file when you make changes through the admin panel.

## Sample Data

The website comes pre-loaded with sample projects and blog posts about AI. Feel free to edit or delete these and add your own content!

## Support

For issues or questions, please refer to the Next.js documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)

## License

This portfolio template is open source and available for personal use.

---

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS
