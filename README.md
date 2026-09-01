# German Language Institute — React + MUI

A complete responsive React/Vite starter website based on the supplied German Language Institute brief.

## Included

- React + Vite
- Material UI (MUI)
- React Router
- Responsive desktop/tablet/mobile layout
- English, German, and Arabic UI
- Arabic RTL support
- Light/dark mode
- Home, Courses, Prices, Test Your German, Contact, Registration
- Impressum, Datenschutz, AGB placeholder pages
- Contact and registration form validation
- Interactive German mini-test
- Supplied institute logo in `public/logo.png`

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Important content placeholders

The supplied brief does not contain official course catalog data, tuition prices, address, phone, email, Instagram URL, Google Maps location, or legal text. Those areas are deliberately marked as placeholders in the source instead of inventing official institute information.

Update `src/main.jsx`:

- `courses`
- `contactInfo`
- legal-page content
- hero imagery if a licensed Münster image is preferred
- form submission handlers/backend integration

The contact and registration forms currently validate in the browser only; connect them to your preferred backend/email service before launch.
