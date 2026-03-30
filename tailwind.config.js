/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Mobile S | M
        'mobile-sm': '380px',
        'mobile-md': '600px',
        // Tablet S | M
        'tablet-sm': '744px',
        'tablet-md': '834px',
        // Desktop S | M | L | XL
        'desktop-sm': '1280px',
        'desktop-md': '1440px',
        'desktop-lg': '1680px',
        'desktop-xl': '2000px',
      },
      colors: {
        /* Base */
        background: "var(--background)",
        foreground: "var(--foreground)",

        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",

        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",

        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",

        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",

        destructive: "var(--destructive)",

        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        /* Sidebar */
        sidebar: "var(--sidebar)",
        "sidebar-foreground": "var(--sidebar-foreground)",
        "sidebar-primary": "var(--sidebar-primary)",
        "sidebar-primary-foreground": "var(--sidebar-primary-foreground)",
        "sidebar-accent": "var(--sidebar-accent)",
        "sidebar-accent-foreground": "var(--sidebar-accent-foreground)",
        "sidebar-border": "var(--sidebar-border)",
        "sidebar-ring": "var(--sidebar-ring)",

        /* Chart colors*/
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },

        /* Brand (from your variables) */
        brand: {
          50: "var(--brand-50)",
          700: "var(--brand-700)",
          800: "var(--brand-800)",
        },

        /* Custom tokens */
        stone: {
          200: "var(--stone-200)",
          500: "var(--stone-500)",
          800: "var(--stone-800)",
        },
        gray:{
          500: "var(--gray-500)"
        }
      },
      // Font Weight 
      fontWeight: {
        normal: "400",
        medium: "500",  
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      leading: {
        "xxs": "10px",
        "xs": "12px",
        "sm": "16px",  // 14px font-size
        "base": "16px", // 16px font-size
      },
      // Box Shadows
      boxShadow: {
        xs: "0px 2px 2px 0px rgba(31, 40, 55, 0.02), 0px 5px 5px 0px rgba(31, 40, 55, 0.02)",
        sm: "0px 0px 1px 0 rgba(31, 40, 55, 0.24), 0px 2px 2px 0px rgba(31, 40, 55, 0.04), 0px 5px 5px 0px rgba(31, 40, 55, 0.04)",
        modal: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        dropdown: "0px 2px 6px -1px rgba(0, 0, 0, 0.08), 0px 2px 4px -1px rgba(0, 0, 0, 0.08)"
      },
      // Font Sizes
      fontSize: {
        xxs: "10px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        "title-1": ["28px", { lineHeight: "28px", letterSpacing: "0.01em" }],
        "title-2": ["24px", { lineHeight: "24px", letterSpacing: "0.01em" }],
        "title-3": ["20px", { lineHeight: "20px", letterSpacing: "0.01em" }],
      },
      // Radius
      borderRadius: {
        lg: "14px",
        md: "12px",
        sm: "10px",
        xs: "8px",
        xxs: "4px"
      },

      fontFamily: {
        menlo: ["Menlo", "monospace"],
        sans: ["var(--font-sans)"],
        heading: ["var(--font-figtree)"],
      },
    },
  },
  plugins: [],
}

