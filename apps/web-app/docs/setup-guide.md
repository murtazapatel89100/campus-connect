# ⚙️ Campus Connect Web App – Setup Guide

This guide will help you **clone**, **install**, **configure**, and **run** the Campus Connect web application locally.

---

## 🧱 Project Stack

| Layer        | Tech                 |
| ------------ | -------------------- |
| Frontend     | Next.js (App Router) |
| Styling      | Tailwind CSS         |
| CMS          | Sanity.io            |
| Auth         | NextAuth.js (JWT)    |
| Database     | MongoDB Atlas        |
| Package Mgmt | pnpm (monorepo)      |

---

## 🚀 1. Clone the Repository

```bash
git clone git@github.com:your-email@gmail.com/campus-connect.git
cd your-monorepo
```

## 📦 2. Install All Dependencies

```bash
pnpm install
cd apps/web
```

## 🔐 4. Set Up Sanity

To configure Sanity for the web app, follow the steps in the guide below:

👉 [Sanity Setup Guide](../../cms/docs/setup-guide)

This guide will help you:

- Connect your Sanity Studio to your project
- Configure datasets and tokens
- Deploy or run Studio locally at `/studio`

> 📌 Make sure your `projectId` and `dataset` in `.env.local` match the values configured in your Sanity project.

## 🔐 5. Set Up Environment Variables

Create a file named `.env.local` in the `apps/web/` directory.

You can copy the template provided:

```bash
cp ../env.template .env.local
```
