# Manual Testing Documentation for India Companies Directory

## Overview

This document outlines the test cases for the India Companies Directory website, covering the following pages:

- Home Page (/)
- Companies Page (/companies)
- Docs Page (/docs)

## Software Testing Life Cycle (STLC)

The manual testing process follows the stages of the STLC:

### 1. Requirement Analysis

Understanding the functionality of the India Companies Directory website and identifying testable requirements for each page.

### 2. Test Planning

Test cases are planned for the following:

- Home Page functionality verification
- Search and display features on the Companies Page
- Content and navigation accuracy on the Docs Page

### 3. Test Case Development

Test cases for each page are detailed below.

### 4. Test Environment Setup

- **Browser**: Specify browser and version
- **Operating System**: Specify OS
- **Screen Resolution**: Specify resolution
- Test environment will include mock data for companies.

### 5. Test Execution

Each test case will be executed, and results will be documented in a predefined template.

### 6. Test Closure

After execution, results and defect logs will be reviewed and finalized.

---

## Test Cases

### Home Page (/)

#### 1. Homepage Title and Subtitle Verification

- **Objective**: Verify that the homepage displays the correct title and subtitle.
- **Test Steps**:
  1. Navigate to the Home Page.
  2. Locate the element with class `.hero-title`.
  3. Locate the element with class `.hero-subtitle`.
- **Expected Results**:
  - Title displays: "Find Companies in India".
  - Subtitle displays: "Explore the comprehensive database of companies across various regions in India on our website, connecting you to the diverse business landscape of the nation."
  - Both elements are clearly visible.

#### 2. Companies Page Button Navigation

- **Objective**: Verify that the button on the homepage correctly links to the /companies page.
- **Test Steps**:
  1. Navigate to the Home Page.
  2. Locate the button with class `.orange-button`.
  3. Inspect the `href` attribute.
  4. Click the button.
- **Expected Results**:
  - Button has `href="/companies"`.
  - Clicking the button navigates to the Companies page.

#### 3. "Why Should We Use This?" Section Verification

- **Objective**: Verify the content and structure of the "Why Should We Use This?" section.
- **Test Steps**:
  1. Locate the section with class `.why-should-we-do-this`.
  2. Check section title and description.
  3. Verify benefits list.
- **Expected Results**:
  - Title: "Why Should We Use This?".
  - Description: "It offers a comprehensive and user-friendly platform to explore companies in India."
  - Benefits list contains exactly 4 items.
  - Three images are present.

#### 4. "Dear Contributors" Section Verification

- **Objective**: Verify the content and functionality of the Contributors section.
- **Test Steps**:
  1. Locate the section with class `.content-contributors`.
  2. Verify the section title and description.
  3. Test GitHub button functionality.
- **Expected Results**:
  - Title: "Dear Contributors".
  - Description: "We know that open source projects rely on the contributions of many people, and we are grateful for your willingness to give your time and skills to this project."
  - GitHub button links to the correct repository.
  - Images are present.

#### 5. Footer Verification

- **Objective**: Verify footer presence and content.
- **Test Steps**:
  1. Scroll to the bottom of the page.
  2. Check the footer component.
- **Expected Results**:
  - Footer is present and properly displayed.

---

### Companies Page (/companies)

#### 1. Search Functionality

- **Objective**: Verify search bar presence and functionality.
- **Test Steps**:
  1. Navigate to the Companies Page.
  2. Locate the search bar.
  3. Test search with inputs:
     - Company name: "Google".
     - Location: "Bangalore".
     - Partial term: "beng".
- **Expected Results**:
  - Placeholder displays: "Search companies or locations...".
  - "Google" shows only Google's company card.
  - "Bangalore" shows companies in Bangalore.
  - "beng" displays exactly 4 company cards.

#### 2. Company Cards Display

- **Objective**: Verify company card content and functionality.
- **Test Steps**:
  1. Check initial company card display.
  2. Verify card components:
     - Company image.
     - Company name (h3 element).
     - Description (p element).
     - External links.
  3. Test external links.
- **Expected Results**:
  - At least one company card is visible initially.
  - Each card contains all required elements.
  - Links open in new tabs and have valid URLs.

#### 3. Search Reset Functionality

- **Objective**: Verify search clearing behavior.
- **Test Steps**:
  1. Enter a search term.
  2. Clear the search bar.
  3. Check company cards display.
- **Expected Results**:
  - Clearing the search restores all company cards.
  - Original layout is maintained.

---

### Docs Page (/docs)

#### 1. Page Structure Verification

- **Objective**: Verify basic page structure and navigation elements.
- **Test Steps**:
  1. Navigate to the Docs Page.
  2. Check for Navbar and Footer.
  3. Verify the main documentation header.
- **Expected Results**:
  - Navbar and Footer are present.
  - Header displays: "Documentation:".

#### 2. Content Sections Verification

- **Objective**: Verify presence and accuracy of documentation sections.
- **Test Steps**:
  1. Check the "Getting Started" section.
  2. Verify the "Usage" section.
  3. Review the "Contributing" section.
- **Expected Results**:
  - "Getting Started" contains 6 steps.
  - "Usage" section has 2 examples.
  - "Contributing" section lists 7 steps.

#### 3. Code Snippets Verification

- **Objective**: Verify presence and accuracy of code examples.
- **Test Steps**:
  1. Locate all code snippets.
  2. Verify commands:
     - `npm install -g pnpm`
     - `git clone git@github.com`
     - `pnpm install`
     - `pnpm run dev`
     - `git commit -m "your commit message"`
- **Expected Results**:
  - Snippets are properly formatted.
  - Commands are accurate and complete.

---

## Test Execution

After all test case execution, there is no bugs found
