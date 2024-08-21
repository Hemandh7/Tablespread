# Tablespread

This project is a React application that allows users to upload a CSV file, parse its contents, and display the data in a Material Table. The file input is styled to enhance user experience, and the application leverages `PapaParse` for CSV parsing.

## Features

- **CSV File Upload:** Users can upload a CSV file from their local machine.
- **Data Parsing:** The CSV file is parsed into JSON format using `PapaParse`.
- **Data Display:** The parsed data is displayed in a responsive Material Table (`MaterialReactTable`).

## Getting Started

Follow these instructions to set up the project on your local machine.

### Usage

1. **Upload a CSV File:**

   - Click the "Choose File" button to select a CSV file from your local machine.
   - Once selected, the file name will be displayed next to the button.

2. **View Data:**

   - The content of the CSV file will be parsed and displayed in a Material Table.

## Project Structure

- `src/App.js`: The main component where the file input and table rendering logic resides.
- `src/App.css`: Contains styles for the file input and other components.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Material React Table:** A library for creating data tables in React.
- **PapaParse:** A powerful library for parsing CSV files in JavaScript.
- **CSS:** For styling components, including the custom file input.
