# Playwright + TypeScript + POM + Element Helper - Nevvon Demo

Small Playwright framework demonstrating:
- Page Object Model (POM)
- Separate element helper layer
- Separate test data/configuration
- Positive and negative login tests
- GitHub Actions CI/CD
- HTML report, screenshot, video and trace on failures

## Project structure

```text
playwright-pom-nevvon/
├── .github/workflows/playwright.yml
├── helpers/
│   ├── elementHelper.ts
│   └── testData.ts
├── pages/
│   └── LoginPage.ts
├── tests/
│   └── login.spec.ts
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

## Local setup

1. Copy `.env.example` to `.env`.
2. Install dependencies:

```bash
npm install
npx playwright install chromium
```

3. Run tests:

```bash
npm test
```

4. Run headed:

```bash
npm run test:headed
```

5. Open report:

```bash
npm run test:report
```

## GitHub Actions

Add these repository secrets under **Settings → Secrets and variables → Actions**:

- `BASE_URL`
- `TEST_USERNAME`
- `TEST_PASSWORD`
- `INVALID_PASSWORD`

The workflow installs dependencies and Chromium, runs the tests, and uploads the HTML report and failure evidence as artifacts.

## Important

The credentials supplied for this demo are stored only in `.env.example` so you can see the expected configuration. Do not commit real project credentials to Git. Prefer GitHub Secrets in CI and a local `.env` file for development.

The login page uses flexible starter locators because the supplied test environment could not be inspected from the public web fetch. Once the page is opened locally, update only the locators in `pages/LoginPage.ts` if the actual DOM uses different attributes.
