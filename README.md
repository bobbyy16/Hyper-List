# Manual Testing

This document provides detailed steps for manually testing the functionality of the Navbar, HomePage, Docs Page, and Companies Page as described in the provided test cases.

---

## **1. Navbar Component**

| **Test Case**                            | **Steps**                                                                                                                                                                                                                                                                      | **Current Behavior**                                                                     | **Expected Behavior**                              | **Pass/Fail** |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------- |
| **1.1. Render Navbar Elements**          | 1. Open the application in a browser. <br> 2. Set viewport to 1024x768. <br> 3. Verify: <br> - Navbar is visible. <br> - Logo source is correct. <br> - GitHub link is visible and points to the correct URL. <br> - Links point to correct URLs. <br> - Menu icon is visible. | Navbar is visible, logo source is correct, GitHub link and other links work as expected. | All navbar elements are rendered correctly.        | ✔️            |
| **1.2. Toggle Mobile Menu**              | 1. Set viewport to 375x667. <br> 2. Click the menu icon. <br> 3. Verify `.links` has class `active` and `nav.navbar` has class `open`. <br> 4. Click the menu icon again. <br> 5. Verify classes are removed.                                                                  | Mobile menu toggles correctly, and classes are added/removed as expected.                | Mobile menu toggles correctly.                     | ✔️            |
| **1.3. Navigate to Pages**               | 1. Set viewport to 375x667. <br> 2. Open mobile menu. <br> 3. Click "Home", "Companies", and "Docs" links. <br> 4. Verify URLs are correct.                                                                                                                                    | Navigation to "Home", "Companies", and "Docs" pages works as expected.                   | Navigation to the correct pages works as expected. | ✔️            |
| **1.4. GitHub Link Attributes**          | 1. Verify the first link in `.links` has the correct `href` attribute.                                                                                                                                                                                                         | GitHub link has the correct `href` attribute.                                            | GitHub link has the correct attributes.            | ✔️            |
| **1.5. Close Mobile Menu on Link Click** | 1. Set viewport to 375x667. <br> 2. Open mobile menu. <br> 3. Click "Companies" link. <br> 4. Verify `.links` no longer has class `active`.                                                                                                                                    | Mobile menu closes when a link is clicked.                                               | Mobile menu closes when a link is clicked.         | ✔️            |

---

## **2. HomePage**

| **Test Case**                                | **Steps**                                                                                 | **Current Behavior**                                           | **Expected Behavior**                       | **Pass/Fail** |
| -------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------- | ------------- |
| **2.1. Display Homepage Title and Subtitle** | 1. Navigate to homepage (`/`). <br> 2. Verify title and subtitle are displayed correctly. | Title and subtitle are displayed correctly.                    | Title and subtitle are displayed correctly. | ✔️            |
| **2.2. Button Links to Companies Page**      | 1. Verify "orange-button" has correct `href` attribute.                                   | Button links to the Companies page.                            | Button links to the Companies page.         | ✔️            |
| **2.3. "Why Should We Use This?" Section**   | 1. Verify title, description, and benefits list are displayed correctly.                  | Title, description, and benefits list are displayed correctly. | Section content is displayed correctly.     | ✔️            |
| **2.4. "Dear Contributors" Section**         | 1. Verify title, description, and button link are displayed correctly.                    | Title, description, and button link are displayed correctly.   | Section content is displayed correctly.     | ✔️            |
| **2.5. Images in Sections**                  | 1. Verify 3 images are displayed in the "Why Should We Use This?" section.                | 3 images are displayed correctly.                              | Images are displayed correctly.             | ✔️            |
| **2.6. Footer Component**                    | 1. Verify the footer exists.                                                              | Footer is displayed.                                           | Footer is displayed.                        | ✔️            |

---

## **3. Docs Page**

| **Test Case**                         | **Steps**                                                                                                | **Current Behavior**                                                                | **Expected Behavior**                            | **Pass/Fail** |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------ | ------------- |
| **3.1. Render Navbar and Footer**     | 1. Navigate to Docs page (`/docs`). <br> 2. Verify navbar and footer are visible.                        | Navbar and footer are visible.                                                      | Navbar and footer are rendered correctly.        | ✔️            |
| **3.2. Display Documentation Header** | 1. Verify header "Documentation:" is displayed.                                                          | Header "Documentation:" is displayed.                                               | Header is visible.                               | ✔️            |
| **3.3. List Getting Started Steps**   | 1. Verify ordered list contains 6 steps.                                                                 | Ordered list contains 6 steps.                                                      | All steps are listed correctly.                  | ✔️            |
| **3.4. Display Usage Examples**       | 1. Verify "Usage" section contains 2 bullet points.                                                      | "Usage" section contains 2 bullet points.                                           | Usage examples are displayed correctly.          | ✔️            |
| **3.5. Display Contributing Section** | 1. Verify "Contributing" section contains 7 steps. <br> 2. Verify company addition example is displayed. | "Contributing" section contains 7 steps, and company addition example is displayed. | Contributing guidelines are displayed correctly. | ✔️            |
| **3.6. Include Code Snippets**        | 1. Verify code snippets are displayed.                                                                   | Code snippets are displayed correctly.                                              | All code snippets are visible.                   | ✔️            |

---

## **4. Companies Page**

| **Test Case**                                   | **Steps**                                                                                                                                                           | **Current Behavior**                                                     | **Expected Behavior**                             | **Pass/Fail** |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------- | ------------- |
| **4.1. Display Search Bar**                     | 1. Navigate to Companies page (`/companies`). <br> 2. Verify search bar exists with correct placeholder.                                                            | Search bar exists with correct placeholder.                              | Search bar is displayed correctly.                | ✔️            |
| **4.2. Display All Company Cards**              | 1. Verify at least one company card is displayed.                                                                                                                   | At least one company card is displayed.                                  | All company cards are visible.                    | ✔️            |
| **4.3. Filter Companies by Name**               | 1. Enter "Google" in the search bar. <br> 2. Verify only one card is displayed.                                                                                     | Only one card is displayed for "Google".                                 | Companies are filtered correctly by name.         | ✔️            |
| **4.4. Filter Companies by Location**           | 1. Enter "Bangalore" in the search bar. <br> 2. Verify all displayed cards contain "Bangalore".                                                                     | All displayed cards contain "Bangalore".                                 | Companies are filtered correctly by location.     | ✔️            |
| **4.5. Display 4 Cards for Search Term "beng"** | 1. Enter "beng" in the search bar. <br> 2. Verify exactly 4 cards are displayed.                                                                                    | Exactly 4 cards are displayed for "beng".                                | 4 cards are displayed for the search term "beng". | ✔️            |
| **4.6. Display Company Details**                | 1. Verify each company card contains: <br> - Image. <br> - Company name. <br> - Description. <br> - Two external links (Visit Website & Careers).                   | Each company card contains image, name, description, and external links. | Company details are displayed correctly.          | ✔️            |
| **4.7. Navigate to External Links**             | 1. Click "Visit Website" and "Careers" links on any company card. <br> 2. Verify links open external websites without errors.                                       | External links open correctly without errors.                            | External links work correctly.                    | ✔️            |
| **4.8. Clear Search Results**                   | 1. Enter "Google" in the search bar. <br> 2. Verify only one card is displayed. <br> 3. Clear the search bar. <br> 4. Verify all company cards are displayed again. | Search results are cleared, and all company cards are displayed again.   | Search results are cleared correctly.             | ✔️            |

---

## **5. Conclusions**

### **Overall Findings**

1. **Navbar Component**:

   - The navbar renders correctly across different viewports.
   - Mobile menu toggling and navigation functionality work as expected.
   - GitHub link and other attributes are correctly configured.

2. **HomePage**:

   - The homepage displays all sections (title, subtitle, buttons, images, and footer) correctly.
   - Links and buttons navigate to the intended pages without issues.

3. **Docs Page**:

   - The documentation page renders the navbar, footer, and all sections (Getting Started, Usage, Contributing) correctly.
   - Code snippets and steps are displayed as expected.

4. **Companies Page**:
   - The search bar and company cards are displayed correctly.
   - Filtering by company name and location works as intended.
   - External links ("Visit Website" and "Careers") function properly.

### **Final Verdict**

- The application functions as expected across all tested components (Navbar, HomePage, Docs Page, and Companies Page).
- All test cases passed as per the expected behavior.

---
