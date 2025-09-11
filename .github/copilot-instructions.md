# GitHub Copilot Instructions

## Project Overview
This repository contains the backend for CajunLyrics, a web application built using the NestJS framework. The backend provides APIs for managing lyrics and versioning information. The project is hosted on Azure App Service and uses Swagger for API documentation.

## Key Files and Directories
- **`src/`**: Contains the main application source code.
  - `lyrics/`: Handles lyrics-related functionality.
  - `version/`: Manages versioning-related functionality.
  - `http-client/`: Provides a flexible HTTP client interface.
- **`build.js`**: Configures `esbuild` for bundling the application.
- **`main.ts`**: Bootstraps the application and sets up Swagger documentation.
- **`test/`**: Contains end-to-end tests.
- **`.github/workflows/`**: Contains CI/CD workflows for deploying to Azure.

## Development Guidelines
1. **Framework**: The project uses NestJS. Follow NestJS conventions for modules, controllers, and services.
2. **Testing**: Write unit tests for all services and controllers. Use `vitest` for testing.
3. **Swagger**: Document all APIs using Swagger decorators. The Swagger UI is available at `/api`.
4. **HTTP Client**: Use the `HttpClient` interface for making external API calls. Avoid direct usage of `fetch` or other libraries.
5. **Bundling**: Use `esbuild` to create a self-contained bundle. The configuration is in `build.js`.

## Deployment
- The application is deployed to Azure App Service using GitHub Actions. The workflow file is located at `.github/workflows/cajunlyrics-backend-appservice-node.yml`.
- Ensure the `dist/` folder is included in the deployment.

## AI Agent Guidelines
- **Code Generation**: Follow the SOLID principles and NestJS conventions.
- **File Creation**: Place new modules in the `src/` directory. Use the NestJS CLI to generate boilerplate code.
- **Testing**: Add tests for all new functionality in the `test/` directory.
- **Documentation**: Update Swagger documentation for all new APIs.

## Common Commands
- **Start the application**: `npm run start`.
- **Run tests**: `npm run test`.
- **Build the application**: `node build.js`.
- **Run linting**: `npm run lint`.

## Additional Notes
- The project uses Node.js 20. Ensure compatibility with this version.
- Follow the existing code style and conventions. Use `eslint` and `prettier` for formatting.

For any questions or issues, refer to the `README.md` or contact the repository maintainers.