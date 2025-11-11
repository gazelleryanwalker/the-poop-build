"use client"

export default function AdminPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Pages CMS</h1>
        <p className="text-gray-600 mb-6">
          This site uses <strong>Pages CMS</strong> - a file-based CMS managed through GitHub.
        </p>
        <div className="space-y-4 text-left max-w-md">
          <div>
            <h2 className="font-semibold mb-2">To manage content:</h2>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
              <li>Visit your content files in the <code className="bg-gray-100 px-2 py-1 rounded">content/</code> directory</li>
              <li>Edit files directly or use GitHub's web editor</li>
              <li>Commit changes to <code className="bg-gray-100 px-2 py-1 rounded">main</code> branch</li>
              <li>Vercel automatically rebuilds and deploys</li>
            </ol>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Content structure:</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li><code className="bg-gray-100 px-2 py-1 rounded">content/pages/</code> - Static pages</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">content/posts/</code> - Blog posts</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">content/practice-areas/</code> - Practice areas</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">content/case-results/</code> - Case results</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">content/testimonials/</code> - Testimonials</li>
            </ul>
          </div>
          <div>
            <a 
              href="https://github.com/gazelleryanwalker/the-poop-build/tree/main/content" 
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Edit Content on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
