# OpsCommand: The Operating System for Modern Business

OpsCommand Dashboard <img width="2822" height="1533" alt="image" src="https://github.com/user-attachments/assets/cf07700a-8aff-4fdb-ae43-31e6e80d33b1" />


**OpsCommand** is a next-generation business operations dashboard designed to provide real-time visibility, automated workflow management, and intelligent resource planning. Built for the modern enterprise in 2026, it unifies fragmented data into a single, cohesive "Command Center."

## 🚀 Key Features

### 1. Command Center (Dashboard)
The central nervous system of your operations.
- **Global Health Orbs:** Instant visualization of departmental health (Sales, Ops, Tech, Finance) with animated status indicators.
- **The Pulse:** A real-time, Twitter-style feed of operational events (e.g., "Order #1234 Shipped", "Severe Delay in Sector 7").
- **Smart KPI Widgets:** Interactive metrics like "Fulfillment Velocity" and "Return Flux" that allow drill-down into root causes.
- **Hero Interactions:** ClickABLE widgets that reveal deep-dive dependency maps and remediation actions.

### 2. Workflow Engine
Automate the mundane and identify bottlenecks.
- **Bottleneck Finder:** Automatically identifies stalled tasks and provides "Nudge" actions to unblock teams.
- **Automation Logs:** A transparent audit trail of all system-automated actions, ensuring trust in the machine.
- **Activity Visualization:** Interactive charts tracking workflow completion vs. failure rates.

### 3. Resource Planner
Optimize team capacity and inventory in real-time.
- **Team Capacity:** Visual workload distribution bars (Healthy, Warning, Overloaded) for every team member.
- **Inventory Health:** Predictive stock depletion tracking with "Days Remaining" counters and risk alerts.
- **Allocation Dialog:** Streamlined modal for assigning tasks and balancing workloads on the fly.

### 4. Intelligence Hub
Connect your entire stack.
- **Integration Hub:** One-click connections to Stripe, Slack, Jira, and Supabase.
- **Command Palette (`Cmd+K`):** specific keyboard-first navigation for power users to jump anywhere in the app instantly.

## 💡 Why OpsCommand? (The Problem It Solves)

Modern businesses suffer from **"Tool Fragmentation"**. Operational data is scattered across incompatible silos. OpsCommand replaces and consolidates these isolated tools into one:

| Replaces... | With OpsCommand Feature... |
| :--- | :--- |
| **Geckoboard / Tableau** | Real-time **Pulse Feed** & **Global Health Orbs** |
| **Asana / Monday.com** | Automated **Workflows** & **Bottleneck Finder** |
| **Excel / Google Sheets** | Live **Resource Planner** & **Inventory Tracking** |
| **Email Chains** | Contextual **Alert Drill-Downs** & **Activity Logs** |
| **Zapier** (Partially) | Built-in **Integration Hub** & **Automation Logs** |

**One Interface. One Truth.** No more Alt-Tab switching between 10 different browser tabs.

---

## 🛠️ Tech Stack

Built with a focus on performance, type safety, and modern aesthetics.

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Server Actions)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (using `@theme` and CSS variables)
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Charts:** [Recharts](https://recharts.org/)
- **Fonts:** [Inter](https://rsms.me/inter/) (UI) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (Data/Numbers)

---

## 🎨 Design Philosophy

OpsCommand was designed to feel **"Professional in 2026"**.
- **Dark Mode Default:** Sleek, high-contrast interface optimized for data density.
- **Glassmorphism:** Subtle `backdrop-blur` and translucent layers to create depth and hierarchy.
- **Semantic Color System:**
  - **Indigo:** Primary Actions
  - **Emerald:** Healthy / Good
  - **Amber:** Warning / Attention Needed
  - **Rose:** Critical / Errors
  - **Slate:** Neutral / Backgrounds
- **Micro-Interactions:** Hover states, smooth transitions, and animated indicators make the app feel alive.

---

## 🏃‍♂️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ops-command.git
   cd ops-command
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   # Note: legacy-peer-deps is required due to React 19 peer dependency conflicts in some libraries
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
ops-command/
├── app/                  # Next.js App Router root
│   ├── inventory/        # Inventory management page
│   ├── resources/        # Resource planner & capacity
│   ├── settings/         # Integration settings
│   ├── workflows/        # Automation engine
│   ├── layout.tsx        # Main app shell (Sidebar, Header)
│   └── page.tsx          # Dashboard (Command Center)
├── components/
│   ├── dashboard/        # Dashboard-specific widgets (HealthOrbs, KpiGrid, etc.)
│   ├── layout/           # Shared layout components (Sidebar, Header)
│   ├── resources/        # Resource planning components
│   ├── settings/         # Settings components
│   ├── ui/               # Shadcn UI reusable components
│   ├── workflows/        # Workflow tables and views
│   └── command-palette.tsx
└── public/               # Static assets
```

---

## 🚀 Roadmap to Production

To transform **OpsCommand** from a high-fidelity prototype into a live business OS, the following integrations and architectural updates are recommended:

### 1. Data Layer & Backend
- **Database:** Connect to **Supabase** or **Neon (Postgres)** using **Prisma** or **Drizzle ORM** to persist inventory, user, and workflow data.
- **Authentication:** Implement **Clerk** or **Auth.js** for secure, role-based access control (RBAC) to restrict "Admin" vs "Viewer" capabilities.
- **State Management:** Replace local mock state with **TanStack Query** (React Query) for efficient server-state caching and synchronization.

### 2. Live Integrations (API Strategy)
Replace `PulseFeed` and `KpiGrid` mock data with real-time webhooks:
- **Inventory:** Sync with **Shopify Admin API** or **NetSuite ERP** to pull live stock levels.
- **Payments/Sales:** Connect **Stripe Webhooks** to trigger "Order Received" events in the Pulse feed.
- **Communications:** Integrate **Slack API** to push alerts to team channels when critical thresholds are met.

### 3. Workflow Orchestration
- **Durable Execution:** Implement **Temporal.io** or **Inngest** to handle long-running background workflows (e.g., "Wait 3 days, then check inventory").
- **Error Handling:** Add **Sentry** for full-stack error tracking and performance monitoring.

### 4. Infrastructure
- **Caching:** Use **Upstash Redis** for rate limiting and fast access to frequently read dashboard metrics.
- **CI/CD:** Set up **GitHub Actions** for automated testing (Playwright) and deployment previews on Vercel.

---

*Designed and Built by Nicola Berry*
