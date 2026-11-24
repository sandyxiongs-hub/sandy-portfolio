Sandy Xiong Portfolio — GitHub Pages

This is a static HTML/CSS/JavaScript copy of the existing portfolio.

Files:
- index.html: website content
- portfolio.css: existing dark portfolio styling and responsive layout
- src/main.js: scroll effects, navigation, resume viewer, and email action
- resources/photo.jpg: portrait used by the site
- resources/Sandy-Xiong-Resume.pdf: one-page resume PDF
- CNAME: custom domain configuration for sxiong.co

Publish on GitHub Pages:
1. Upload the contents of this folder to the ROOT of the sandy-portfolio repository (not inside another nested folder).
2. Commit the files to the main branch.
3. In GitHub, open Settings > Pages.
4. Under Build and deployment, choose "Deploy from a branch".
5. Select branch "main" and folder "/ (root)", then Save.
6. After the GitHub Pages site is published, set Custom domain to sxiong.co in the same Pages settings. The CNAME file is included already.
7. Enable "Enforce HTTPS" when GitHub makes it available.

DNS:
After GitHub Pages is configured for sxiong.co, update the Wix DNS records for the apex (@) to GitHub Pages' four A records:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

Do not delete unrelated MX or TXT records. Keep the existing domain registration at Wix.

This package is designed for GitHub Pages' branch-based hosting and does not require Node.js, a build step, GitHub Actions, or a paid hosting plan.
