## Battery Readings Dashboard
This is a straightforward Vue 3 application built with Vite and TypeScript, designed to display and filter battery readings from a local JSON data source.

## Objectives Addressed
Here's how this project meets the given requirements:

## Vue 3 Application: Developed using Vue 3 and its Composition API for modern, reactive components.
* **Data Source: Fetches battery reading data directly from the battery.json file located in the src/data/ folder.
* **Tooling: Utilizes npm for package management, Vite for a blazing-fast development experience, and Vitest for robust unit testing.
* **Language: Written entirely in TypeScript to ensure type safety, reduce common runtime errors, and improve code maintainability.
* **Automated Tests: Includes dedicated unit tests for the core data loading and filtering logic, ensuring reliability.
* **Scalability: The application structure, featuring distinct components and composables, is designed to be easily extensible for future growth without over-engineering.
* **Target Environment: Optimized to run seamlessly on the latest version of Chrome.
* **Development Focus: Prioritizes a smooth development workflow, intentionally skipping complex production build optimizations like minification or obfuscation.
* **README: This document provides a comprehensive overview of the project, including its design, assumptions, and usage instructions.
Design and Assumptions
* **Core Functionality: The main goal is to present battery reading data clearly in a tabular format.
* **Filtering: A basic search filter allows users to quickly narrow down records by employeeId or serialNumber, addressing a fundamental user need for data exploration.
* **Data Source: For this exercise, battery.json is directly imported into the useBatteryData.ts composable. In a real-world scenario, this would typically be replaced by an asynchronous API call (e.g., using fetch or axios).
* **Vue Composables (useBatteryData.ts): All data fetching, processing, and filtering logic is encapsulated within a reusable Vue composable. This promotes a clear separation of concerns, enhances testability, and allows for logic reuse across different parts of the application.
Components (BatteryTable.vue, HomeView.vue): The application's UI elements are organized into dedicated Vue components, keeping rendering logic separate and modular.
* **TypeScript: The codebase leverages TypeScript with custom type definitions (types.ts) to improve code quality, reduce potential bugs, and provide a better developer experience through type checking.
Key for v-for: Table rows use a unique key composed of serialNumber and timestamp. This is crucial for Vue's rendering efficiency, especially since a serialNumber might appear multiple times with different timestamps.
Styling: Tailwind CSS is integrated and used across the application for consistent and rapid UI development.
How to Run the Application
Follow these steps to get the application running locally:

## Prerequisites:

Ensure you have Node.js (LTS version recommended) and npm installed on your system.
This project is set up to use npm by default.
Clone or Download the Project:
Obtain the project files (e.g., by cloning the repository or downloading the archive).

Place battery.json:
Make sure your battery.json data file is located in the src/data/ directory (i.e., src/data/battery.json).


## How to Run the Application

1.  **Prerequisites:**
    * Node.js (LTS version recommended) and npm installed. You can download them from [https://nodejs.org/](https://nodejs.org/).
    * If you're using a different package manager like `pnpm` or `yarn`, ensure it's installed. (This project uses `npm` by default based on the Vite setup).

2.  **Clone or Download the Project:**
    (Assume the user has the project files)

3.  **Place `battery.json`:**
    Ensure your `battery.json` file is placed in the `data/` directory inside the `src/` folder (i.e., `src/data/battery.json`).

4.  **Install Dependencies:**
    Navigate to the project root directory in your terminal and run:
    ```bash
    npm install
    ```

5.  **Run in Development Mode:**
    To start the development server:
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173/` (or another port if 5173 is in use).

## How to Run Tests

1.  **Ensure Dependencies are Installed:** Follow step 4 from "How to Run the Application".
2.  **Run Unit Tests:**
    Navigate to the project root directory in your terminal and run:
    ```bash
    npm run test:unit
    ```
    This will execute the tests defined in `test/useBatteryData.test.ts` and output the results in your terminal.


* **Trade-offs and Future Scope
This solution provides a robust and clean foundation within the given time constraints, prioritizing quality for the initial version. The following features were considered but scoped out to maintain focus and deliver a polished MVP:

Advanced Filtering & Sorting:

* **Strategy: Enhance filtering capabilities to include specific criteria like academyId, batteryLevel ranges, or timestamp periods (e.g., "last 24 hours," "last week"). Additionally, implementing client-side sorting for all relevant table columns (ascending/descending) would greatly improve data usability. These enhancements would primarily involve extending the computed properties and filtering/sorting logic within the useBatteryData composable.
Pagination:

* **Strategy: For very large datasets, loading and rendering all rows simultaneously can impact performance. Implementing client-side pagination would allow for displaying a manageable number of records per page. This would require adding reactive state for the current page and items per page, and adjusting the filteredReadings computed property to slice the data accordingly.
Data Visualization:

* **Strategy: Integrating a charting library (such as Chart.js, ApexCharts, or Echarts) could provide valuable insights into the battery data. Visualizations could include trends of battery levels over time, the distribution of readings by academyId, or average battery levels for specific devices. This would typically involve creating new Vue components dedicated to rendering charts and preparing data subsets tailored for visualization.
Robust Error Handling (for Real-world Data Fetching):

* **Strategy: While battery.json is directly imported for this exercise, a production application would almost certainly fetch data from a backend API. Comprehensive error handling would be crucial, covering network failures, various API response errors (e.g., 404 Not Found, 500 Internal Server Error), and data parsing issues. This would involve adding try-catch blocks around asynchronous operations and implementing user-friendly feedback mechanisms in the UI.
Accessibility (A11y) Enhancements:

* **Strategy: Improving the application's accessibility would ensure it's usable by a wider audience, including individuals using assistive technologies. This would involve a thorough audit to enhance keyboard navigation, add appropriate ARIA attributes to interactive elements and tables, and ensure sufficient color contrast for all text and UI elements.





