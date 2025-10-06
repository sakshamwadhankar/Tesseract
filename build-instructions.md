# Building the React Components

To get the actual React voting system working, you need to build each component:

## Option 1: Build Individual Components

```bash
# For each component directory:
cd tessellation-vote-portal
npm install
npm run build

cd ../shield-tesseract-access-portal  
npm install
npm run build

# Repeat for other components...
```

## Option 2: Use the Integration Script

```bash
# From the root directory:
npm install
npm run dev
```

This will build all components and serve them at http://localhost:8080

## Current Working Solution

For immediate access without building:
- Navigate to: http://localhost:3000/working-index.html
- This provides a functional interface to browse all components
