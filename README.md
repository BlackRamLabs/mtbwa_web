# mtbwa_web

The <https://www.mtbwa.com.au> website hosted from GitHub Page.

## 🧪 Test Suite

The certification page includes a comprehensive automated test suite that validates all main display details and interactions.

### 📋 Test Coverage

**Navigation Bar Tests:**

- Navigation bar existence
- Navigation links presence
- MTBWA branding visibility

**Page Structure Tests:**

- Hero section existence
- Features section presence
- Container elements
- Footer section

**Tab Functionality Tests:**

- Tab button existence for all 5 certification levels (level0-level4)
- Content div presence for all levels
- Tab switching functionality
- Tab highlighting behavior

**Content Elements Tests:**

- Certification types section
- Provider section
- CTA section
- Feature cards

**Responsive Design Tests:**

- Viewport meta tag
- CSS variables definition

**Interactive Elements Tests:**

- Button elements
- Link elements
- Certification tags

**Animations Tests:**

- AOS library loading
- AOS elements presence

**Accessibility Tests:**

- Image alt text
- Heading hierarchy

### 🚀 How to Use

**Automatic Testing:**

The test suite automatically runs 1 second after the certification page loads and displays results in the browser console.

**Manual Testing:**

Open the browser console and run:

```javascript
runCertificationTests()
```

### 📊 Output Format

The test suite provides:

- **Color-coded console output** (green for pass, red for fail, blue for headers)
- **Clear pass/fail indicators** (✓ PASS, ✗ FAIL)
- **Success rate calculation**
- **Failed tests summary** with detailed descriptions
- **Overall status** (🎉 ALL TESTS PASSED! or ⚠️ SOME TESTS FAILED)

### 🔧 Test Suite Features

**CertificationPageTestSuite Class:**

- Organized test methods for different page aspects
- Comprehensive validation of page functionality
- Detailed debugging information for failed tests
- Automatic execution on page load

**Test Results:**

- Total test count
- Pass/fail breakdown
- Success rate percentage
- Detailed failure descriptions

### 📝 Example Output

```text
🧪 CERTIFICATION PAGE TEST SUITE
=====================================

=== NAVIGATION BAR TESTS ===
✓ PASS: nav_exists
✓ PASS: nav_links_exist
✓ PASS: branding_exists

=== TAB FUNCTIONALITY TESTS ===
✓ PASS: tab_buttons_level0
✓ PASS: content_div_level0
✓ PASS: tab_switch_level0
✗ FAIL: tab_highlight_level0 - Tabs for level0 should be highlighted when active

📊 TEST RESULTS SUMMARY
=====================================
Total Tests: 25
Passed: 24
Failed: 1
Success Rate: 96.0%

❌ FAILED TESTS:
  - tab_highlight_level0: Tabs for level0 should be highlighted when active

⚠️ SOME TESTS FAILED
```

This test suite ensures the certification page maintains high quality and functionality across all interactive elements and display features.

