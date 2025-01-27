# Manual Testing Documentation

## Overview

This document outlines the test cases for the India Companies Directory website, covering the following pages:

- Home Page (/)
- Companies Page (/companies)
- Docs Page (/docs)

## Test Cases

### Home Page

#### 1. Homepage Title and Subtitle Verification

**Objective**: Verify that the homepage displays the correct title and subtitle.

**Test Steps**:

1. Navigate to the Home Page
2. Locate the element with class `.hero-title`
3. Locate the element with class `.hero-subtitle`

**Expected Results**:

- Title should display: "Find Companies in India"
- Subtitle should display: "Explore the comprehensive database of companies across various regions in India on our website, connecting you to the diverse business landscape of the nation."
- Both elements should be clearly visible on the page

#### 2. Companies Page Button Navigation

**Objective**: Verify that the button on the homepage correctly links to the /companies page.

**Test Steps**:

1. Navigate to the Home Page
2. Locate the button with class `.orange-button`
3. Inspect the href attribute

**Expected Results**:

- Button should have href="/companies"
- Clicking the button should navigate to the Companies page

#### 3. "Why Should We Use This?" Section Verification

**Objective**: Verify the content and structure of the "Why Should We Use This?" section.

**Test Steps**:

1. Locate section with class `.why-should-we-do-this`
2. Check section title and description
3. Verify benefits list

**Expected Results**:

- Section title should be "Why Should We Use This?"
- Description should read: "It offers a comprehensive and user-friendly platform to explore companies in India."
- Benefits list should contain exactly 4 items
- Three images should be present in the section

#### 4. "Dear Contributors" Section Verification

**Objective**: Verify the content and functionality of the Contributors section.

**Test Steps**:

1. Locate section with class `.content-contributors`
2. Verify section content
3. Test GitHub button functionality

**Expected Results**:

- Section title should be "Dear Contributors"
- Description should read: "We know that open source projects rely on the contributions of many people, and we are grateful for your willingness to give your time and skills to this project."
- GitHub button should link to the correct repository
- Images should be present in the section

#### 5. Footer Verification

**Objective**: Verify footer presence and content.

**Test Steps**:

1. Scroll to bottom of page
2. Check footer component

**Expected Results**:

- Footer should be present and properly displayed

### Companies Page

#### 1. Search Functionality

**Objective**: Verify search bar presence and functionality.

**Test Steps**:

1. Navigate to Companies Page
2. Locate search bar
3. Test search functionality with various inputs:
   - Company name: "Google"
   - Location: "Bangalore"
   - Partial term: "beng"

**Expected Results**:

- Search bar should display placeholder: "Search companies or locations..."
- "Google" search should show only Google's company card
- "Bangalore" search should show only companies in Bangalore
- "beng" search should display exactly 4 company cards

#### 2. Company Cards Display

**Objective**: Verify company card content and functionality.

**Test Steps**:

1. Check initial company cards display
2. Verify card components:
   - Company image
   - Company name (h3 element)
   - Description (p element)
   - External links
3. Test external links functionality

**Expected Results**:

- At least one company card should be visible initially
- Each card should contain all required elements
- External links should open in new tabs
- Links should have valid URLs

#### 3. Search Reset Functionality

**Objective**: Verify search clearing behavior.

**Test Steps**:

1. Enter search term
2. Clear search bar
3. Check company cards display

**Expected Results**:

- Clearing search should restore all company cards
- Original card layout should be maintained

### Docs Page

#### 1. Page Structure Verification

**Objective**: Verify basic page structure and navigation elements.

**Test Steps**:

1. Navigate to Docs Page
2. Check for Navbar and Footer
3. Verify main documentation header

**Expected Results**:

- Navbar and Footer should be present
- Main header should display "Documentation:"

#### 2. Content Sections Verification

**Objective**: Verify presence and accuracy of documentation sections.

**Test Steps**:

1. Check "Getting Started" section
2. Verify "Usage" section
3. Review "Contributing" section

**Expected Results**:

- "Getting Started" should contain 6 steps
- "Usage" section should have 2 examples
- "Contributing" section should list 7 steps

#### 3. Code Snippets Verification

**Objective**: Verify presence and accuracy of code examples.

**Test Steps**:

1. Locate all code snippets
2. Verify the following commands are present:
   - `npm install -g pnpm`
   - `git clone git@github.com`
   - `pnpm install`
   - `pnpm run dev`
   - `git commit -m "your commit message"`

**Expected Results**:

- All code snippets should be properly formatted
- Commands should be accurate and complete

## Test Execution

### Test Environment

- Browser: [Specify browser and version]
- Operating System: [Specify OS]
- Screen Resolution: [Specify resolution]

### Test Results Template

For each test case, record:

- Status: [Pass/Fail]
- Date Tested: [DD/MM/YYYY]
- Tester: [Name]
- Comments: [Any observations or issues]
- Screenshots: [If applicable]

### Defect Reporting

For failed test cases, document:

1. Test Case Reference
2. Description of Issue
3. Steps to Reproduce
4. Expected vs Actual Result
5. Screenshots/Videos
6. Environment Details
7. Severity Level
8. Additional Notes
