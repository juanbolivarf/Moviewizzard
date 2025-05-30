# MovieWizard Angular Application

A modern Angular web application for movie recommendations and reviews.

## Features

- Responsive navigation menu
- Home page with engaging content
- Contact form with validation
- Modern UI with smooth animations
- Mobile-friendly design

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v16 or higher)

## Installation

1. Clone the repository:
```bash
git clone <your-bitbucket-repo-url>
cd movie-wizard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Navigate to `http://localhost:4200` in your browser.

## Building for Production

1. Build the application:
```bash
ng build --configuration production
```

2. The build artifacts will be stored in the `dist/movie-wizard` directory.

## Deployment to Bitbucket

1. Create a new repository on Bitbucket

2. Initialize git and push to Bitbucket:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-bitbucket-repo-url>
git push -u origin main
```

3. Configure Bitbucket Pipelines:
   - Create a `bitbucket-pipelines.yml` file in the root directory
   - Add the following configuration:

```yaml
image: node:16

pipelines:
  default:
    - step:
        name: Build and Test
        script:
          - npm install
          - npm run build
        artifacts:
          - dist/**
```

4. Enable Pipelines in your Bitbucket repository settings

## Development

- `ng serve`: Start development server
- `ng build`: Build the application
- `ng test`: Run unit tests
- `ng e2e`: Run end-to-end tests
- `ng lint`: Run linting

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   ├── contact/
│   │   └── navbar/
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── app.config.ts
├── assets/
└── styles.scss
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License.
