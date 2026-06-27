(function () {
    window.PORTFOLIO_DATA = {
        owner: "Moises Roth",
        title: "Application Portfolio",
        intro: "A curated set of tools, experiments, and internal accelerators built around SailPoint, automation, and personal productivity.",
        sections: [
            {
                id: "sailpoint-tools",
                title: "SailPoint Tools",
                tone: "Identity lifecycle, troubleshooting, and admin workflows.",
                items: [
                    {
                        tag: "SailPoint",
                        title: "ISC CCG Log Reader",
                        description: "Tool for reading and analyzing Cloud Gateway (CCG) logs in SailPoint ISC.",
                        url: "https://isc-ccg-log-reader.vercel.app/",
                        previewImage: "./assets/previews/isc-ccg-log-reader.png",
                        previewLabel: "Preview do Log Reader",
                        isNew: true
                    },
                    {
                        tag: "SailPoint",
                        title: "ISC Flat File Manager",
                        description: "Tool for managing and testing flat file sources in ISC.",
                        url: "https://isc-flat-file-manager.vercel.app/",
                        previewImage: "./assets/previews/isc-flat-file-manager.png",
                        previewLabel: "Preview do Flat File Manager",
                        isNew: true
                    },
                    {
                        tag: "SailPoint",
                        title: "ISC Access History",
                        description: "View identity lifecycle and access events.",
                        url: "https://isc-access-history.vercel.app/",
                        previewImage: "./assets/previews/isc-access-history.png",
                        previewLabel: "Preview do Access History",
                        isNew: true
                    },
                    {
                        tag: "SailPoint",
                        title: "SailPoint One Page",
                        description: "Centralized one-page workspace for common SailPoint identity, access, and source tasks.",
                        url: "https://isc-one-page.vercel.app/",
                        previewImage: "./assets/previews/isc-one-page.png",
                        previewLabel: "Preview do SailPoint One Page",
                        isNew: true
                    },
                    {
                        tag: "SailPoint",
                        title: "ISC Transform Manager",
                        description: "Build, inspect, and understand SailPoint transforms in one focused workspace.",
                        url: "https://isc-transform-manager.vercel.app/",
                        previewImage: "./assets/previews/isc-transform-manager.png",
                        previewLabel: "Preview do ISC Transform Manager",
                        isNew: true
                    },
                    {
                        tag: "SailPoint",
                        title: "ISC Auto Documentation",
                        description: "Automatically generate documentation from ISC configuration.",
                        url: "https://moisesroth.vercel.app/magica3.html",
                        private: true
                    },
                    {
                        tag: "SailPoint",
                        title: "ISC Certification Report",
                        description: "Generate and review certification report data in SailPoint ISC.",
                        url: "https://isc-certification-report.vercel.app/",
                        previewImage: "./assets/previews/isc-certification-report.png",
                        previewLabel: "Preview do ISC Certification Report",
                        private: true
                    }
                ]
            },
            {
                id: "api-tools",
                title: "API Tools",
                tone: "Browser-first utilities for quick integration and testing.",
                items: [
                    {
                        tag: "Python",
                        title: "Web Python Execution",
                        description: "Execute Python scripts directly from the browser.",
                        url: "https://web-python-execution.onrender.com/",
                        previewImage: "./assets/previews/web-python-execution.png",
                        previewLabel: "Preview do Web Python Execution"
                    }
                ]
            },
            {
                id: "projects",
                title: "Projects",
                tone: "Personal systems and habit-focused tools.",
                items: [
                    {
                        tag: "Personal",
                        title: "Nutri Check-in",
                        description: "Daily tracking application for habits and routine.",
                        url: "https://nutri-checkin.vercel.app/",
                        previewImage: "./assets/previews/nutri-checkin.png",
                        previewLabel: "Preview do Nutri Check-in",
                        private: true
                    }
                ]
            },
            {
                id: "productivity-tools",
                title: "Productivity Tools",
                tone: "Focused helpers for execution, tracking, and daily flow.",
                items: [
                    {
                        tag: "Productivity",
                        title: "Daily Time Tracker",
                        description: "Track tasks throughout the day, log interruptions, and export personal time reports.",
                        url: "https://mr-time-management.vercel.app/",
                        previewImage: "./assets/previews/daily-time-tracker.png",
                        previewLabel: "Preview do Daily Time Tracker",
                        isNew: true
                    }
                ]
            },
            {
                id: "legacy",
                title: "Legacy",
                tone: "Previous generations, prototypes, and original hosted versions.",
                items: [
                    {
                        tag: "Legacy",
                        title: "GPCA FastAPI (Legacy)",
                        description: "IAM backend for identity processing and integrations.",
                        url: "https://fastapi-gpca.onrender.com/",
                        private: true
                    },
                    {
                        tag: "Legacy",
                        title: "ISC Flat File Manager (Legacy)",
                        description: "Original Render-hosted version.",
                        url: "https://isc-flat-file-manager.onrender.com/",
                        private: true
                    },
                    {
                        tag: "Legacy",
                        title: "Access History (Legacy)",
                        description: "Original version of the access history interface.",
                        url: "https://moisesroth.vercel.app/magica2.html",
                        private: true
                    }
                ]
            }
        ]
    };
})();
