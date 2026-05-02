# Buy Your Kids A House — Marketing Website

The main marketing site for buyyourkidsahouse.com

---

## 🚀 Launch Checklist

### Step 1 — Buy your domain
1. Go to **namecheap.com** (recommended) or **cloudflare.com**
2. Search for `buyyourkidsahouse.com`
3. Purchase it (~$12/year on Namecheap, ~$10/year on Cloudflare)
4. Keep the tab open — you'll need it in Step 5

---

### Step 2 — Create a GitHub account
1. Go to **github.com**
2. Click "Sign up" — use your regular email
3. Choose the free plan

---

### Step 3 — Upload this repo to GitHub
1. Once logged in, click the **"+"** icon in the top right → "New repository"
2. Name it: `bykah-website`
3. Set it to **Private**
4. Click "Create repository"
5. On the next screen, click **"uploading an existing file"**
6. Drag and drop ALL files from this folder into the upload area
7. Click "Commit changes"

---

### Step 4 — Deploy to Vercel
1. Go to **vercel.com**
2. Click "Sign up" → choose "Continue with GitHub" (links your accounts)
3. Click **"Add New Project"**
4. Find `bykah-website` in the list → click **"Import"**
5. Leave all settings as default
6. Click **"Deploy"**
7. Wait ~2 minutes — Vercel will give you a URL like `bykah-website.vercel.app`
8. Your site is live! ✅

---

### Step 5 — Connect your custom domain
1. In Vercel, go to your project → **Settings → Domains**
2. Type in `buyyourkidsahouse.com` → click Add
3. Vercel will show you DNS records to add (two lines)
4. Go back to Namecheap → Domain List → Manage → Advanced DNS
5. Add the records Vercel gave you
6. Wait 10-30 minutes for DNS to propagate
7. Visit buyyourkidsahouse.com — it's live on your domain ✅

---

### Step 6 — Connect email capture (ConvertKit)
1. Go to **convertkit.com** → sign up free
2. Create a Form → copy the Form ID
3. In `src/App.jsx`, replace the email form `onSubmit` to post to ConvertKit's API
4. (Claude can help you wire this in — just ask)

---

## 🔧 Making updates after launch

Every time you want to update the site:
1. Edit the files
2. Go to your GitHub repo → upload the changed files
3. Vercel automatically detects the change and redeploys in ~1 minute

---

## 📁 File structure

```
bykah-website/
├── public/
│   └── index.html        # HTML shell, edit meta tags here
├── src/
│   ├── index.js          # Entry point (don't touch)
│   └── App.jsx           # The entire website — edit this
├── package.json          # Dependencies (don't touch)
├── vercel.json           # Vercel config (don't touch)
└── .gitignore            # Files to exclude from GitHub
```

---

## 💬 Need help?

Ask Claude: *"Help me update the website"* or *"Add a new section to the homepage"*
and share the relevant file — Claude has full context on this project.
